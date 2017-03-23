
const React = require('react')
const Autocomplete = require('react-autocomplete')
require("./gene-autocomplete.css")

const TRANSITIONS = {
  pristine: 1,
  underEdit: 2,
  fetchingSuggestion: 3,
  geneWasChosen: 4
}

const AutocompleteBox = React.createClass({
  propTypes: {
    suggesterUrlTemplate : React.PropTypes.string.isRequired,
    onGeneChosen: React.PropTypes.func.isRequired,
    value: React.PropTypes.string
  },
  getInitialState () {
    const value = this.props.value || ''
    return {
      value,
      currentTransition: value ? TRANSITIONS.geneWasChosen : TRANSITIONS.pristine,
      currentSuggestions: []
    }
  },

  _requestSuggestions (value) {
    if(this.state.currentTransition === TRANSITIONS.fetchingSuggestion){
      let httpRequest = new XMLHttpRequest();
      httpRequest.onload = (e) => {
        const xhr = e.target;
        let results;
        if (xhr.responseType === 'json') {
          results = xhr.response;
        } else {
          results = JSON.parse(xhr.responseText);
        }
        this.setState({ currentSuggestions: results, currentTransition: TRANSITIONS.underEdit})
      };
      httpRequest.open('GET', this.props.suggesterUrlTemplate.replace(/\{0\}/, value), true);
      httpRequest.responseType = 'json';
      httpRequest.send();
    }
  },
  _renderItem (item, isHighlighted) {
    return (
      <div
        className={"menu-element"}
        style={isHighlighted ? {"background": "#007c82", "color": "white"} : {}}
        key={item.value+""+item.category}
        id={item.value}
      >
      <span>
        {item.value}
      </span>
      {item.category &&
        <i style={{float:"right"}}>
          {item.category}
        </i>
      }
      </div>
    )
  },

  _isTooShortToShowHints (value) {
    return !value || value.length <3
  },

  render () {
    return (
      <div className={"gene-autocomplete "+(
          this.state.currentTransition === TRANSITIONS.underEdit
          || this.state.currentTransition === TRANSITIONS.fetchingSuggestion
          ? "underEdit"
          : this.state.currentTransition === TRANSITIONS.geneWasChosen
            ? "geneWasChosen"
            : "")}>
        <span tabIndex={-1} ref={(span) => {this.dummySpan=span}} />
        <Autocomplete
          open={this.state.currentTransition === TRANSITIONS.underEdit
                || this.state.currentTransition === TRANSITIONS.fetchingSuggestion}
          onMenuVisibilityChange={()=>{}}
          inputProps={{name: "Enter gene", id: "gene-autocomplete", type:"text"}}
          value={this.state.value}
          items={this.state.currentSuggestions}
          getItemValue={(item) => item.value}
          wrapperStyle={{display:"block"}}
          onSelect={(value, item) => {
            this.setState({ value, currentSuggestions: [] , currentTransition: TRANSITIONS.geneWasChosen}, () => {
              this.dummySpan.focus()
              this.props.onGeneChosen(value)
            })
          }}
          onChange={(event, value) => {
            if(this._isTooShortToShowHints(value)){
              this.setState({value: value, currentTransition: TRANSITIONS.underEdit})
            } else {
              this.setState({value: value, currentTransition: TRANSITIONS.fetchingSuggestion}, () => {
                this._requestSuggestions(value)
              })
            }
          }}
          renderMenu={(items, value, style) => {
            return (
             <div className="menu" style={{ }}>
               {this._isTooShortToShowHints(value)
                ? false
                : this.state.currentTransition === TRANSITIONS.fetchingSuggestion
                  ? (
                    <div style={{padding: 6, float: "bottom"}}>
                      Loading...
                    </div>
                  )
                  : <div>
                      {items}
                    </div>
                }
             </div>
           )
         }}
          renderItem={this._renderItem}
        />
      </div>
    )
  }
})

module.exports = AutocompleteBox;

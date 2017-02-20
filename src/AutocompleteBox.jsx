
const React = require('react')
const Autocomplete = require('react-autocomplete')
require("./gene-autocomplete.css")

const AutocompleteBox = React.createClass({
  propTypes: {
    suggesterUrlTemplate : React.PropTypes.string.isRequired,
    onGeneChosen: React.PropTypes.func.isRequired
  },
  getInitialState () {
    return {
      value: '',
      currentSuggestions: [],
      loading: false
    }
  },

  _requestSuggestions (value) {
    if(this.state.loading){
      let httpRequest = new XMLHttpRequest();
      httpRequest.onload = (e) => {
        const xhr = e.target;
        let results;
        if (xhr.responseType === 'json') {
          results = xhr.response;
        } else {
          results = JSON.parse(xhr.responseText);
        }
        this.setState({ currentSuggestions: results, loading: false })
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
        style={isHighlighted ? {"background": "gainsboro", "color": "black"} : {}}
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
      <div className="gene-autocomplete">
        <Autocomplete
          inputProps={{name: "Enter gene", id: "gene-autocomplete"}}
          value={this.state.value}
          items={this.state.currentSuggestions}
          getItemValue={(item) => item.value}
          onSelect={(value, item) => {
            this.setState({ value, currentSuggestions: [] })
            this.props.onGeneChosen(this.state.value)
          }}
          onChange={(event, value) => {
            if(this._isTooShortToShowHints(value)){
              this.setState({value: value, loading: false})
            } else {
              this.setState({value: value, loading: true}, () => {
                this._requestSuggestions(value)
              })
            }
          }}
          renderMenu={(items, value, style) => {
            return (
             <div className="menu" style={{ }}>
               {this._isTooShortToShowHints(value)
                ? false
                : this.state.loading
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

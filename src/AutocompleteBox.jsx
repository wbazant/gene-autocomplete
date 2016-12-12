
const React = require('react')
const Autocomplete = require('react-autocomplete')
const getStates = require('./Fakes.jsx').getStates
const matchStateToTerm = require('./Fakes.jsx').matchStateToTerm
const sortStates = require('./Fakes.jsx').sortStates
const styles = require('./Fakes.jsx').styles
const fakeRequest = require('./Fakes.jsx').fakeRequest
require("./json-tag-editor.css")

const AutocompleteBox = React.createClass({
  propTypes: {
    suggesterUrl : React.PropTypes.string.isRequired
  },
  getInitialState () {
    return {
      value: '',
      currentSuggestions: [],
      loading: false
    }
  },

  _requestSuggestions (value) {
    const fetched = [{"value":"REG3G","category":"symbol"},{"value":"REG4","category":"symbol"},{"value":"REG1A","category":"symbol"},{"value":"REG3A","category":"symbol"},{"value":"REG1B","category":"symbol"},{"value":"REG1CP","category":"symbol"},{"value":"Reg3b","category":"symbol"},{"value":"Reg3a","category":"symbol"},{"value":"Reg1a","category":"symbol"},{"value":"Reg3g","category":"symbol"},{"value":"Reg4","category":"symbol"},{"value":"Reg-5","category":"symbol"},{"value":"Reg-2","category":"symbol"},{"value":"REG","category":"symbol"},{"value":"regucalcin","category":"symbol"}]
    setTimeout(() => {
      this.setState({ currentSuggestions: fetched, loading: false })
    }, 500)
  },
  _renderItem (item, isHighlighted) {
    return (
      <li
        className={"menu-element"}
        key={item.value+""+item.category}
        id={item.value}
      >
      <a>
      <span>
        {item.value}
      </span>
      {item.category &&
        <i style={{float:"right"}}>
          {item.category}
        </i>
      }
      </a>
      </li>
    )
  },

  render () {
    return (
      <div className="small-12 columns">
        <label>Gene, tissue or biological condition</label>
        <div className="gene-autocomplete">
          <Autocomplete
            inputProps={{name: "Enter gene", id: "gene-autocomplete"}}
            ref="autocomplete"
            value={this.state.value}
            items={this.state.currentSuggestions}
            getItemValue={(item) => item.value}
            onSelect={(value, item) => {
              this.setState({ value, currentSuggestions: [] })
            }}
            onChange={(event, value) => {
              this.setState({ value, loading: true })
              this._requestSuggestions(value)
            }}
            renderMenu={(items, value, style) => {
              return (
               <div className="menu" style={{ }}>
                 {this.state.loading ? (
                   <div style={{padding: 6, float: "bottom"}}>Loading...</div>
                 ) : <ul>{items}</ul>}
               </div>
             )
           }}
            renderItem={this._renderItem}
          />
        </div>
      </div>
    )
  }
})

module.exports = AutocompleteBox;

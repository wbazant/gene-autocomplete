import React from 'react'
import AutocompleteBox from './AutocompleteBox.jsx'
require("./gene-autocomplete.css")

const ListWithAutocomplete = ({
  suggesterUrlTemplate, values, onChangeValues
}) => (
  <div className="list-with-autocomplete">
      {
        values.map((value)=> (
          <div
            className={"list-element"}
            key={value}
            id={value}
          >
          <span>
            {value}
          </span>
          <button
              style={{fontSize:"1.5rem", top:"0.25rem"}}
              className="close-button small"
              aria-label="Close alert"
              type="button"
              onClick={()=> {
                onChangeValues(values.filter((v)=>v!==value))
              }}
              >
            <span aria-hidden="true">&times;</span>
          </button>
          </div>
        ))
      }
    <AutocompleteBox {...{suggesterUrlTemplate}}
      valuesToSkipInSuggestions={values}
      onGeneChosen={(geneChosen) => onChangeValues(values.concat([geneChosen]))}
    />
  </div>
)

ListWithAutocomplete.propTypes = {
  values: React.PropTypes.arrayOf(React.PropTypes.string.isRequired).isRequired,
  onChangeValues: React.PropTypes.func.isRequired,
  suggesterUrlTemplate: React.PropTypes.string.isRequired
}

export default ListWithAutocomplete

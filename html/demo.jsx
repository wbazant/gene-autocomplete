import React from 'react'
import ListWithAutocomplete from '../src/ListWithAutocomplete.jsx'
class Demo extends React.Component {

  constructor(props) {
      super(props);
        this.state = {
          values: []
      };
  }


  render() {
    return (
      <ListWithAutocomplete
      suggesterUrlTemplate={"https://www.ebi.ac.uk/gxa/json/suggestions?query={0}&species="}
        values={this.state.values}
        onChangeValues={(values)=> {
          console.log(values)
          this.setState({values})
        }} />
    )
  }
}

export default Demo

import React, { Component } from 'react';
import GreatHall from './GreatHall'
import SortingHat from './SortingHat'
import MaraudersMap from './MaraudersMap'

class Hogwarts extends Component {

  state = {
    wizards: []
  }

  componentDidMount() {
    fetch("http://localhost:4000/wizards")
      .then(resp => resp.json())
      .then(json => this.setState({wizards: json}))
  }

  render() {
    return (
      <main>
        <MaraudersMap/>
        <GreatHall wizards={this.state.wizards} />
        <SortingHat/>
      </main>
    )
  }

}

export default Hogwarts;

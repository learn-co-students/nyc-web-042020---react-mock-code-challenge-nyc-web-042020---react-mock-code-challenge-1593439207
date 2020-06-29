import React, { Component } from 'react';
import GreatHall from './GreatHall'
import SortingHat from './SortingHat'
import MaraudersMap from './MaraudersMap'

class Hogwarts extends Component {

  state = {
    wizards: []
  }

  handleSubmit = (wizardObj) => {
    const configObj = {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(wizardObj)
    }

    fetch("http://localhost:4000/wizards", configObj)
      .then(resp => resp.json())
      .then(json => this.setState((prevState) => { return {wizards: [...prevState.wizards, json]} }))
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
        <SortingHat handleSubmit={this.handleSubmit}/>
      </main>
    )
  }

}

export default Hogwarts;

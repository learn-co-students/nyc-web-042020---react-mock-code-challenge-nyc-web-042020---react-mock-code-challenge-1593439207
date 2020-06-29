import React, { Component } from 'react';
import GreatHall from './GreatHall'
import SortingHat from './SortingHat'
import MaraudersMap from './MaraudersMap'

class Hogwarts extends Component {

  state = {
    wizards: [],
    house: "All"
  }

  componentDidMount() {
    fetch("http://localhost:4000/wizards")
      .then(resp => resp.json())
      .then(json => this.setState({wizards: json}))
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

  handleSelect = (house) => {
    this.setState({house: house})
  }

  filterWizards = () => {
    return this.state.wizards.filter(wizard => {if (this.state.house === "All") { return wizard } else {return wizard.house === this.state.house}} )
  }

  render() {
    return (
      <main>
        <MaraudersMap house={this.state.house} handleSelect={this.handleSelect}/>
        <GreatHall wizards={this.filterWizards()} />
        <SortingHat handleSubmit={this.handleSubmit}/>
      </main>
    )
  }

}

export default Hogwarts;

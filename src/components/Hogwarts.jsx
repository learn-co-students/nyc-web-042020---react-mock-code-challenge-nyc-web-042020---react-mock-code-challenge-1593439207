import React, { Component } from 'react';
import GreatHall from './GreatHall'
import SortingHat from './SortingHat'
import MaraudersMap from './MaraudersMap'

class Hogwarts extends Component {

  state = {
    wizards: []
  }

  componentDidMount(){
      fetch("http://localhost:4000/wizards")
      .then(r => r.json())
      .then(wizards => {
        this.setState({
          wizards: wizards
        })
    })
  }

  addWizard = (wizard) => {
    fetch("http://localhost:4000/wizards", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "accept": "application/json"
      },
      body: JSON.stringify(wizard)
    })
    .then(r => r.json())
    .then(wizard => {
      let allWizards = [...this.state.wizards]
      allWizards.push(wizard)
      this.setState({
        wizards: allWizards
      })
    })
  }
  
  removeWizard = (event, wizard) => {
    console.log(event.target, wizard)
    let foundWizard = this.state.wizards.find(findWizard => findWizard.id === wizard.id)
    let changedWizards = this.state.wizards.filter(wizards => wizards.id !== foundWizard.id)
    this.setState({
      wizards: changedWizards
    })
  }

  renderWizards = (event) => {
    let filteredWizards = [...this.state.wizards].filter(wizard => wizard.house === event.target.value)
    console.log(filteredWizards)
    this.setState({
      wizards: filteredWizards
    })
  }

  render() {
    return (
      <main>
        <MaraudersMap renderWizards={this.renderWizards}/>
        <GreatHall wizards={this.state.wizards} removeWizard={this.removeWizard}/>
        <SortingHat addWizard={this.addWizard}/>
      </main>
    )
  }

}

export default Hogwarts;

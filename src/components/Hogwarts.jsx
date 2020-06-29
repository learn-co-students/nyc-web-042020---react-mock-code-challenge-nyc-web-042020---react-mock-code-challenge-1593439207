import React, { Component } from 'react';
import GreatHall from './GreatHall'
import SortingHat from './SortingHat'
import MaraudersMap from './MaraudersMap'

class Hogwarts extends Component {

  state = {
    wizards: [],
    searchTerm: ''
  }

  componentDidMount() {
    fetch('http://localhost:4000/wizards')
    .then(resp => resp.json())
    .then(wizardsData => this.setState({ wizards: wizardsData }))
  }

  addNewWizard = (newWizard) => this.setState({wizards: [...this.state.wizards, newWizard]})

  changeSearchTerm = (termFromChild) => this.setState({searchTerm: termFromChild})

  deleteWizardFromArr = (idFromChild) => {
    let copyOfWizards = this.state.wizards.filter(wizard => {
      return wizard.id !== idFromChild
    })
  }

  render() {
    const { searchTerm, wizards } = this.state

    let filteredWizardsArr = wizards.filter(wizardPOJO => {
      return (
        wizardPOJO.house.toLowerCase().includes(searchTerm.toLowerCase())
      )
    })

    return (
      <main>
        <MaraudersMap searchTerm={searchTerm} changeSearchTerm={this.changeSearchTerm}/>
        <GreatHall wizards={filteredWizardsArr} deleteWizardFromArr={this.deleteWizardFromArr}/>
        <SortingHat addNewWizard={this.addNewWizard}/>
      </main>
    )
  }

}

export default Hogwarts;

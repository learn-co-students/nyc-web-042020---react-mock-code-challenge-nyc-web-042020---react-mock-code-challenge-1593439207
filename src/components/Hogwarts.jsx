import React, { Component } from 'react';
import GreatHall from './GreatHall'
import SortingHat from './SortingHat'
import MaraudersMap from './MaraudersMap'

class Hogwarts extends Component {
  state = {
    wizards: [],
    wizardFilter: "All"
  }
  componentDidMount(){
    fetch(`http://localhost:4000/wizards`).then(r => r.json()).then(wizs => this.setState({wizards: wizs}))
  }

  updateWizardFilter = (filter) => {
    this.setState({wizardFilter: filter})
  }

  addWizard = (newWizard) => {
    let newList = [...this.state.wizards, newWizard]
    this.setState({wizards: newList})
  }

  removeWizard = (wizardId) => {
    let wizardList = this.state.wizards.filter((wiz) => {
      return wiz.id !== wizardId
    })
    this.setState({wizards: wizardList})
  }


  wizardsFiltered = () => {
    let wizardList = this.state.wizards

    if (this.state.wizardFilter === "All") {
      return wizardList
    }
    if (this.state.wizardFilter !== "All") {
    wizardList = this.state.wizards.filter((wizard) => {
      return wizard.house === this.state.wizardFilter
    })
    return wizardList
  }
  }


  render() {
    //console.log("hogwarts", this.state.wizards)
    console.log("Filter state", this.state.wizardFilter)
    return (
      <main>
        <MaraudersMap updateWizardFilter={this.updateWizardFilter}/>
        <GreatHall wizards={this.wizardsFiltered()} removeWizard={this.removeWizard}/>
        <SortingHat addWizard={this.addWizard}/>
      </main>
    )
  }

}

export default Hogwarts;

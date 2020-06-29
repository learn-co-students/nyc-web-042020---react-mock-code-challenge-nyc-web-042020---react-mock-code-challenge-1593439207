import React, { Component } from 'react';
import GreatHall from './GreatHall'
import SortingHat from './SortingHat'
import MaraudersMap from './MaraudersMap'

class Hogwarts extends Component {
  state = {
    wizardList: [],
    house: ""
  }

  filterTerm = (termFromChild) => {
    this.setState({
      house: termFromChild
    })
    console.log(this.state.house)
  }

  returnUpdatedArray = () => {
    let newArray = this.state.wizardList.filter((wizardPOJO) => {
      return (
        wizardPOJO.house.includes(this.state.filterTerm)
      )
    })
    return newArray
  }

  componentDidMount(){
    fetch("http://localhost:4000/wizards")
    .then(r => r.json())
    .then((wizards) => {
      this.setState({
        wizardList: wizards
      })
    })
  }

  addNewWizard = (newWizard) => {
    let updatedArray = [...this.state.wizardList, newWizard]

    this.setState({
      wizardList: updatedArray
    })
  }

  deleteWizard = (wizardInstanceId) => {
    let updatedArray = this.state.wizardList.filter((wizard) => {
      return wizard.id != wizardInstanceId
    })
    this.setState({
      wizardList: updatedArray
    })
  }

  render() {
    let {wizardList} = this.state
    return (
      <main>
        <MaraudersMap
          filterTerm={this.filterTerm}
          returnUpdatedArray={this.returnUpdatedArray}
        />
        <GreatHall 
          wizards={wizardList}
          deleteWizard={this.deleteWizard}
        />
        <SortingHat
          addNewWizard={this.addNewWizard}
        />
      </main>
    )
  }

}

export default Hogwarts;

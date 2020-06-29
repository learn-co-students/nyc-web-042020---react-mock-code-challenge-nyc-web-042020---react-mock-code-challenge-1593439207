import React, { Component } from 'react';
import GreatHall from './GreatHall'
import SortingHat from './SortingHat'
import MaraudersMap from './MaraudersMap'
const baseUrl = "http://localhost:4000/wizards"
class Hogwarts extends Component {
  state = {
    wizards: [],
    sortBy: "",
    houses: []
  }
  
  componentDidMount() {
    fetch(baseUrl) 
      .then(res => res.json()) 
      .then(wizards => this.setState({
        wizards: wizards 
      }))
  }
  
  toggleImage = wizard => {
    const col = this.state.wizards 
    const i = col.indexOf(wizard) 
    this.setState({
      wizards: [
        ...col.slice(0, i), 
        {...wizard, isClicked: !wizard.isClicked}, ...col.slice(i+1) 
      ]
    })
  }
  addWizard = (wizard) => {
    this.setState({
      wizards: [...this.state.wizards, wizard]
    });
  }

  handleSelectChange = (e) => {
    this.setState({
      sortBy: e.target.value 
    })
  }

  render() {
    return (
      <main>
        <MaraudersMap/>
        <GreatHall wizards={this.state.wizards} fetchWizards = {this.fetchWizards}/>
        <SortingHat/>
      </main>
    )
  }

}

export default Hogwarts;

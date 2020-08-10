import React, { Component } from 'react';
import GreatHall from './GreatHall'
import SortingHat from './SortingHat'
import MaraudersMap from './MaraudersMap'
const baseUrl = "http://localhost:4000/wizards"
class Hogwarts extends Component {
  state = {
    wizards: [],
    filter: "All", 
  }

  componentDidMount() {
    this.fetchWizards() 
  }

  fetchWizards = () => {
    fetch(baseUrl) 
      .then(res => res.json()) 
      .then(wizard => this.setState({
        wizards: wizard
      }))
  }

  filterWizards = () => {
    if (this.state.filter === 'All') {
      return this.state.wizards; 
    } 
    else {
      return this.state.wizards.filter(wizard => {
        if (wizard.house === this.state.filter) return true; 
      });
    }
  }

  handleSelection = (e) => {
    this.setState({
      filter: e.target.value 
    })
    console.log(e.target.value)
  }

  addWizard = (wizard) => {
    this.setState({
      wizards: [...this.state.wizards, wizard]
    })
  }

  graduateWizard = (id) => {
    fetch(`${baseUrl}/${id}`, {
      method: "DELETE" 
    })
    .then(res => res.json())
    .then(json => this.setState({
      wizards: json 
    })) 
  }

  render() {
    return (
      <main>
        <MaraudersMap handleSelection={this.handleSelection}/>
        <GreatHall wizards={this.filterWizards()} graduateWizard={this.graduateWizard}/>
        <SortingHat addWizard={this.addWizard}/>
      </main>
    )
  }

}

export default Hogwarts;

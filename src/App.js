import React, { Component } from 'react';
import './App.css';

import Header from './components/Header'
import Hogwarts from './components/Hogwarts'

class App extends Component {

  state = {
    wizards: []
  }

  componentDidMount() {
    fetch('http://localhost:4000/wizards')
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        wizards: data
      })
    })
  }

  addNewWizard = (newWizard) => {
    this.setState({
      wizards: [...this.state.wizards, newWizard]
    })
  }

  houseFilter = (house) => {
    let filteredArray
    if (house !== "All") {
      filteredArray = this.state.wizards.filter((wizard) => {
        return wizard.house === house
      })
    }
    console.log(filteredArray)
  }

  deleteWizard = (id) => {
    console.log(id)
    let newWizardArray = this.state.wizards.filter((wizard) => {
      return wizard.id !== id
    })
    this.setState({
      wizards: newWizardArray
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Hogwarts 
          wizards={this.state.wizards}
          addNewWizard={this.addNewWizard}
          houseFilter={this.houseFilter}
          deleteWizard={this.deleteWizard}
          />
      </div>
    );
  }
  
}

export default App;

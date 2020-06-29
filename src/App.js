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

  render() {
    return (
      <div className="App">
        <Header />
        <Hogwarts 
          wizards={this.state.wizards}
          addNewWizard={this.addNewWizard}
          />
      </div>
    );
  }
  
}

export default App;

import React, { Component } from 'react';
import './App.css';

import Header from './components/Header'
import Hogwarts from './components/Hogwarts'

class App extends Component {

  state = {
    wizards: [],
  }

  componentDidMount() {
    fetch("http://localhost:4000/wizards")
    .then(resp => resp.json())
    .then((wizardObjs) => {
      this.setState({
        wizards: wizardObjs
      })
    })


  }
  


  
  
  render() {     
    return (
      <div className="App">
        <Header />
        <Hogwarts 
        wizardList = { this.state.wizards }
        toggler = {this.toggleImage}
        />
      </div>
    );
  }
  
  
}

export default App;

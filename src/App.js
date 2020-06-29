import React, { Component } from 'react';
import './App.css';

import Header from './components/Header'
import Hogwarts from './components/Hogwarts'

class App extends Component {


state = {
  display:false,
  wizardArray: []
}

componentDidMount(){
  fetch("http://localhost:4000/wizards")
  .then(resp => resp.json())
  .then(wizardList => {
    this.setState({
      wizardArray:wizardList
    })
  })
}

  render() {
    return (
      <div className="App">
        <Header />
        <Hogwarts />
      </div>
    );
  }
  
}

export default App;

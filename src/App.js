import React, { Component } from 'react';
import './App.css';

import Header from './components/Header'
import Hogwarts from './components/Hogwarts'
import GreatHall from './components/GreatHall'

class App extends Component {

  state = {
    wizards: []
  }

  componentDidMount(){
    this.fetchWizards()
  }

  fetchWizards = () =>{
    fetch('http://localhost:4000/wizards')
    .then(resp => resp.json())
    .then(wizards => this.setState({wizards}))
  }


  render() {
    // console.log(this.state.wizards.map(w => w.name))
    return (
      <div className="App">
        <Header />
        <Hogwarts />
        <GreatHall wizards={this.state.wizards} />
      </div>
    );
  }

  
}

export default App;

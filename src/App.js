import React, { Component } from 'react';
import './App.css';

import Header from './components/Header'
import Hogwarts from './components/Hogwarts'

class App extends Component {

  state = {
      students: []
    }


  componentDidMount() {
    fetch('http://localhost:4000/wizards')
    .then(response => response.json())
    .then(allStudents => 
      this.setState({
          students: allStudents}))}
    

   

  render() {
    return (
      <div className="App">
        <Header />
        {this.state.students.map(student => <Hogwarts name={student.name} key={student.id} house={student.house}/>)}
      </div>
    );
  }
  
}

export default App;

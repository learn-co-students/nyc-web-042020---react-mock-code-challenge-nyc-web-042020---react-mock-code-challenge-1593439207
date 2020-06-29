import React, { Component } from 'react';
import GreatHall from './GreatHall'
import SortingHat from './SortingHat'
import MaraudersMap from './MaraudersMap'

class Hogwarts extends Component {

  state = {
    wizards: [],
    name: '',
    wand: '',
    house: '',
    image1: '',
    image2: '',
    clicked: true,
    value: 'Gryffindor'
  }

  componentDidMount = () => {
    fetch("http://localhost:4000/wizards")
      .then(r => r.json())
      .then(arrayOfWizards => {
        this.setState({
          wizards: arrayOfWizards
        })
      })
  }

  handleClick = () => {
    console.log("click")
    if(this.state.clicked === true){
      this.setState({
        clicked: false
      })
    }
    else if(this.state.clicked === false){
      this.setState({
        clicked: true
      })
    }
    console.log(this.state.clicked)

  }

  clicked = () => {
    // if(this.state.clicked === true){
    //   this.setState({
    //     clicked: false
    //   })
    // }
    // if(this.state.clicked === false){
    //   this.setState({
    //     clicked: true
    //   })
    // }
  }

  handleHouseFilter = (event) => {
    this.setState({
      value: event.target.value
    })

  }

  handleDelete = (wizardId) => {

    fetch(`http://localhost:4000/wizards/${wizardId}`, {
      method: "DELETE"
    })
    // .then(r => r.json())
    // .then(this.state.wizards)

    console.log("click", wizardId)
  }

  handleChange = () => {

  }

  render() {
    console.log(this.state.wizards)
    return (
      <main>
        <MaraudersMap
        handleHouseFilter={this.handleHouseFilter}
        />

        <GreatHall
        wizards={this.state.wizards}
        handleDelete={this.handleDelete}
        handleClick={this.handleClick}
        clicked={this.clicked}
        />

        <SortingHat
          handleChange={this.handleChange}
          name={this.state.name}
          wand={this.state.wand}
          house={this.state.house}
          image1={this.state.image1}
          image2={this.state.image2}        
        />
      </main>
    )
  }

}

export default Hogwarts;

import React, { Component } from 'react';

class SortingHat extends Component {

  state = {
      name: "",
      wand: "",
      house: "",
      image1: "",
      image2: ""
  }

  handleName = (evt) => {
    this.setState({
        name: evt.target.value
    })
  }

  handleWand = (evt) => {
    this.setState({
        wand: evt.target.value
    })
  }
  handleHouse = (evt) => {
    this.setState({
        house: evt.target.value
    })
  }
  handleImage1 = (evt) => {
    this.setState({
        image1: evt.target.value
    })
  }

  handleImage2 = (evt) => {
    this.setState({
        image2: evt.target.value
    })
  }

  logState = (evt) => {
    evt.preventDefault()
    console.log(this.state)
    console.log(this.props.addWizard)
    this.props.addWizard(this.state)
  }

  render() {
    return (
      <section>
        <h2>You Could Be Great, You Know...</h2>
        <form className="new_container" onSubmit={this.logState} >

          <label htmlFor="name">Name:</label>
          <input type="text" name="name" id="name" onChange={this.handleName}/>

          <label htmlFor="wand">Wand:</label>
          <input type="text" name="wand" id="wand" onChange={this.handleWand}/>

          <label htmlFor="house">House:</label>
          <select name="house" id="house" onChange={this.handleHouse}>
            <option value="Gryffindor">Gryffindor</option>
            <option value="Hufflepuff">Hufflepuff</option>
            <option value="Ravenclaw">Ravenclaw</option>
            <option value="Slytherin">Slytherin</option>
          </select>

          <label htmlFor="image1">Image 1:</label>
          <input type="url" name="image1" id="image1" onChange={this.handleImage1}/>

          <label htmlFor="image2">Image 2:</label>
          <input type="url" name="image2" id="image2" onChange={this.handleImage2}/>

          <input type="submit" value="Log A New Wizard"/>

        </form>
      </section>
    );
  }

}

export default SortingHat;

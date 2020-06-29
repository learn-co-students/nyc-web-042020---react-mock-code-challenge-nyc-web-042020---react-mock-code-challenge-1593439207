import React, { Component } from 'react';
const baseUrl = "http://localhost:4000/wizards"
class SortingHat extends Component {
  constructor() {
    super() 
    this.state = this.getInitialState() 
  } 

  getInitialState = () => ({house: '', name: '', wand: '', image1: '', image2: ''})

  handleChange = (e, {house, value}) => this.setState({ [house]: value}) 

  handleSubmit = (e) => {
    e.preventDefault() 
    const {house, name, wand, image1, image2} = this.state 
    fetch(baseUrl, {
      method: "POST", 
      headers: {
        "Content-Type": "application/json", 
        Accept: "application/json" 
      }, 
      body: JSON.stringify({
        house, 
        name, 
        wand, 
        image: {
          image1: image1, 
          image2: image2 
        }
      })
    })
    .then(res => res.json()) 
    .then(wizard => this.props.addWizard(wizard)) 
    .catch(error => console.error(error)) 
    this.setState(this.getInitialState())  
  }

  render() {
    const {house, name, wand, image1, image2} = this.state 
    const {handleChange, handleSubmit} = this 
    return (
      <section>
        <h2>You Could Be Great, You Know...</h2>
        <form className="new_container" onSubmit={handleSubmit}>

          <label htmlFor="name">Name:</label>
          <input type="text" name="name" id="name" value={name}/>

          <label htmlFor="wand">Wand:</label>
          <input type="text" name="wand" id="wand"/>

          <label htmlFor="house">House:</label>
          <select name="house" id="house">
            <option value="Gryffindor">Gryffindor</option>
            <option value="Hufflepuff">Hufflepuff</option>
            <option value="Ravenclaw">Ravenclaw</option>
            <option value="Slytherin">Slytherin</option>
          </select>

          <label htmlFor="image1">Image 1:</label>
          <input type="url" name="image1" id="image1"/>

          <label htmlFor="image2">Image 2:</label>
          <input type="url" name="image2" id="image2"/>

          <input type="submit" value="Log A New Wizard"/>

        </form>
      </section>
    );
  }

}

export default SortingHat;

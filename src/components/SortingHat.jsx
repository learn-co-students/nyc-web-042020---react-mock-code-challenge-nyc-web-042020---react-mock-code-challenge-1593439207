import React, { Component } from 'react';

class SortingHat extends Component {

  state = {
    name: "",
    wand: "",
    house: "Gryffindor",
    image1: "",
    image2: ""
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    
    const wizardObj = {
      name: this.state.name,
      wand: this.state.wand,
      house: this.state.house,
      image1: this.state.image1,
      image2: this.state.image2
    }

    this.props.handleSubmit(wizardObj)
  }

  render() {
    return (
      <section>
        <h2>You Could Be Great, You Know...</h2>
        <form className="new_container" onSubmit={this.handleSubmit}>

          <label htmlFor="name">Name:</label>
          <input type="text" name="name" id="name" value={this.state.name} onChange={this.handleChange}/>

          <label htmlFor="wand">Wand:</label>
          <input type="text" name="wand" id="wand" value={this.state.wand} onChange={this.handleChange}/>

          <label htmlFor="house">House:</label>
          <select name="house" id="house" value={this.state.house} onChange={this.handleChange}>
            <option value="Gryffindor">Gryffindor</option>
            <option value="Hufflepuff">Hufflepuff</option>
            <option value="Ravenclaw">Ravenclaw</option>
            <option value="Slytherin">Slytherin</option>
          </select>

          <label htmlFor="image1">Image 1:</label>
          <input type="url" name="image1" id="image1" value={this.state.image1} onChange={this.handleChange}/>

          <label htmlFor="image2">Image 2:</label>
          <input type="url" name="image2" id="image2" value={this.state.image2} onChange={this.handleChange}/>

          <input type="submit" value="Log A New Wizard"/>

        </form>
      </section>
    );
  }

}

export default SortingHat;

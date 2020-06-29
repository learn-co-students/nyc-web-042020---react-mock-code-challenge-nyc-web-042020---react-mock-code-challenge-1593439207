import React, { Component } from 'react';

class SortingHat extends Component {
  state = {
    name: '',
    wand: '',
    house: '',
    image1: '',
    image2: ''
  }

  handleInput = (e) => {
    // console.log(e.target.value)
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    fetch(`http://localhost:4000/wizards`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify({
        name: this.state.name,
        wand: this.state.wand,
        house: this.state.house,
        image1: this.state.image1,
        image2: this.state.image2
      })
    })
    .then(res => res.json())
    .then(newWizard => {
      this.props.newKid(newWizard)
    })

    this.setState({
      name: '',
      wand: '',
      house: '',
      image1: '',
      image2: '' 
    })
  }

  render() {

    return (
      <section>
        <h2>You Could Be Great, You Know...</h2>
        <form className="new_container" onSubmit={this.handleSubmit}>

          <label htmlFor="name">Name:</label>
          <input type="text" name="name" id="name" onChange={this.handleInput}/>

          <label htmlFor="wand">Wand:</label>
          <input type="text" name="wand" id="wand" onChange={this.handleInput}/>

          <label htmlFor="house">House:</label>
          <select name="house" id="house">
            <option value="Gryffindor">Gryffindor</option>
            <option value="Hufflepuff">Hufflepuff</option>
            <option value="Ravenclaw">Ravenclaw</option>
            <option value="Slytherin">Slytherin</option>
          </select>

          <label htmlFor="image1">Image 1:</label>
          <input type="url" name="image1" id="image1" onChange={this.handleInput}/>

          <label htmlFor="image2">Image 2:</label>
          <input type="url" name="image2" id="image2" onChange={this.handleInput}/>

          <input type="submit" value="Log A New Wizard" />

        </form>
      </section>
    );
  }

}

export default SortingHat;

import React, { Component } from 'react';

class SortingHat extends Component {
  state = {
    name: "",
    house: "",
    image1: "",
    image2: "",
    wand: ""
  }

  handleChange = (evt) => {
 this.setState({[evt.target.name]: evt.target.value})
  }

handleSubmit = (e) => {
e.preventDefault()
fetch("http://localhost:4000/wizards", {
  method: "POST",
  headers: {
    "content-type" : "application/json"
  },
  body: JSON.stringify({name: this.state.name, house: this.state.house, image1:this.state.image1, image2:this.state.image2, wand: this.state.wand})
})
.then(resp => resp.json())
.then((newWizard) => {
  this.props.addWizardToArray(newWizard)
})



}

  render() {

    return (
      <section>
        <h2>You Could Be Great, You Know...</h2>
        <form className="new_container" onSubmit={this.handleSubmit}>

          <label htmlFor="name">Name:</label>
          <input type="text" name="name" id="name" onChange={this.handleChange} value={this.state.name}/>

          <label htmlFor="wand">Wand:</label>
          <input type="text" name="wand" id="wand" onChange={this.handleChange} value={this.state.wand}/>

          <label htmlFor="house">House:</label>
          <select name="house" value={this.state.house} onChange={this.handleChange} id="house">
            <option value="Gryffindor">Gryffindor</option>
            <option value="Hufflepuff" >Hufflepuff</option>
            <option value="Ravenclaw">Ravenclaw</option>
            <option value="Slytherin">Slytherin</option>
          </select>

          <label htmlFor="image1" >Image 1:</label>
          <input type="url" name="image1" id="image1" onChange={this.handleChange} value={this.state.image1}/>

          <label htmlFor="image2" >Image 2:</label>
          <input type="url" name="image2" id="image2" onChange={this.handleChange} value={this.state.image2}/>

          <input type="submit" value="Log A New Wizard"/>

        </form>
      </section>
    );
  }

}

export default SortingHat;

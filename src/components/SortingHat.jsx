import React, { Component } from 'react';

class SortingHat extends Component {


  state = {
    name: "",
    wand: "",
    house: "Gryffindor",
    image1: "",
    image2: ""
  }

  handleTextInput = (evt) => {
    console.log(evt.target.value)
    this.setState({[evt.target.name]: evt.target.value})
  }

  handleSubmit = (evt) => {
    evt.preventDefault()
    let {name, wand, house, image1, image2} = this.state
    fetch(`http://localhost:4000/wizards`, {
      method: "POST",
      headers: {
        "accepts": "application/json",
        "content-type": "application/json"
    },
    body: JSON.stringify({name: name, wand: wand, hosue: house, image1: image1, image2:image2})
  }).then(r => r.json()).then(this.props.addWizard)


}


  render() {

    return (
      <section>
        <h2>You Could Be Great, You Know...</h2>
        <form className="new_container">

          <label htmlFor="name">Name:</label>
          <input type="text" name="name" id="name" onChange={this.handleTextInput}/>

          <label htmlFor="wand">Wand:</label>
          <input type="text" name="wand" id="wand" onChange={this.handleTextInput}/>

          <label htmlFor="house">House:</label>
          <select name="house" id="house" onChange={this.handleTextInput}>
            <option value="Gryffindor">Gryffindor</option>
            <option value="Hufflepuff">Hufflepuff</option>
            <option value="Ravenclaw">Ravenclaw</option>
            <option value="Slytherin">Slytherin</option>
          </select>

          <label htmlFor="image1">Image 1:</label>
          <input type="url" name="image1" id="image1" onChange={this.handleTextInput}/>

          <label htmlFor="image2">Image 2:</label>
          <input type="url" name="image2" id="image2" onChange={this.handleTextInput}/>

          <input type="submit" value="Log A New Wizard" onClick={this.handleSubmit}/>

        </form>
      </section>
    );
  }

}

export default SortingHat;

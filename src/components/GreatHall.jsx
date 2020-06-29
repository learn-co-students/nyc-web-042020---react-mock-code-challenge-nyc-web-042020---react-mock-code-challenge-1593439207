import React, { Component } from 'react';
import Wizard from './Wizard'

class GreatHall extends Component {

  state = {
    imageCount: 1,
    currentImage: this.props.wizardItem.image1
  }

  handleClick = (e) => {
    if(this.state.imageCount === 1) {
      this.setState ({
        imageCount: 2, 
        currentImage: this.props.wizardItem.image2
      })
    }
    if(this.state.imageCount === 2) {
      this.setState ({
        imageCount: 1,
        currentImage: this.props.wizardItem.image1
      })
    }
    console.log(this.state)
  }
  
  
  render() {

    return (
      <section>
        <h2>Students of Hogwarts</h2>
        <ul className="cards">
          <ul>Name: {this.props.wizardItem.name}</ul>
          <ul>House: {this.props.wizardItem.house}</ul>
          <ul>Wand: {this.props.wizardItem.wand}</ul>
          <ul>Image: {<img onClick={this.handleClick} src = {this.state.currentImage} alt={this.props.wizardItem.name}/>}</ul>
        </ul>
      </section>
    )

  }

  }


export default GreatHall;

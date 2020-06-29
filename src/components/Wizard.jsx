import React, { Component } from 'react';

class Wizard extends Component {
  state = {
    clickedByUser: false
  }
  
  
  handleClick = (evt) => {
    this.setState(prevState => ({
      clickedByUser: !this.state.clickedByUser
    }))
  }

  handleDelete = (evt) => {
    fetch(`http://localhost:4000/wizards/${this.props.wizard.id}`, {
      method: "DELETE"
    })
    .then(r => r.json())
    .then((deletedWizard) => {
      this.props.deleteWizard(this.props.wizard.id)
    })
  }

  render() {
    let {name, wand, house, image1, image2} = this.props.wizard
    return (
        <li className={`card ${house}`}>
          <div className="decorative">
            <div className="top">
              <div className="name">
                <h3>{name}</h3>
              </div>
              <div className="border" onClick={this.handleClick}>
                {this.state.clickedByUser === true
                ?
                <img src={image2} alt={this.props.name}/>
                : 
                <img src={image1} alt={this.props.name}/>
                }
              </div>
            </div>
            <div className="card_bottom">
              <p className="house_name">{house}</p>
              <p className="description">Wand: {wand}</p>
              <button onClick={this.handleDelete}>
                Graduate
              </button>
            </div>
          </div>
        </li>

    );
  }

}

export default Wizard;

import React, { Component } from 'react';

class Wizard extends Component {
  
  handleDelete = event => {
    fetch(`http://localhost:4000/wizards/${this.props.wizard.id}`, {
      method: 'DELETE'
    })
    .then(resp => resp.json())
    .then(deletedWizard => {
      this.props.deleteWizardFromArr(this.props.wizard.id)
    })
  }

  render() {
    const { name, wand, house, image1, image2 } = this.props

    return (
        <li className={`card ${house}`}>
          <div className="decorative">
            <div className="top">
              <div className="name">
                <h3>{name}</h3>
              </div>
              <div className="border">
                <img src={image1} alt={name}/>
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

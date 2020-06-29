import React, { Component } from 'react';

class Wizard extends Component {

  state = {
    toggleImg: true
  }

  handleClick = (e) => {
    this.setState((prevState) => {
      return {
        toggleImg: !prevState.toggleImg
      }
    })
  }

  handleDelete = (e) => {
    let id = this.props.wizardObj.id
    fetch(`http://localhost:4000/wizards/${id}`, {
      method: "DELETE"
    })
    
    this.props.deleteWizard(id)
    //do a fetch delete with this id
    //send to function in App to delete this id from the wizard array 
  }

  render() {
    let {name, wand, house, image1, image2} = this.props.wizardObj
    return (
        <li className={`card ${house}`}>
          <div className="decorative">
            <div className="top">
              <div className="name">
                <h3>{name}</h3>
              </div>
              <div className="border" onClick={this.handleClick}>
                {
                this.state.toggleImg 
                ?
                <img src={image1} alt={name}/>
                :
                <img src={image2} alt={name}/>
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

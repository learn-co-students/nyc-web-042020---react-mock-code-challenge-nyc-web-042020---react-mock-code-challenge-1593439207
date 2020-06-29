import React, { Component } from 'react';

class Wizard extends Component {

  render() {
    return (
        <li className={`card ${"HOUSE HERE"}`}>
          <div className="decorative">
            <div className="top">
              <div className="name">
                <h3>{this.props.name}</h3>
              </div>
              <div className="border">
              <img src={this.props.image1} alt={this.props.name}/>
              </div>
            </div>
            <div className="card_bottom">
            <p className="house_name">{this.props.house}</p>
            <p className="description">Wand: {this.props.wand}</p>
              <button>
                Graduate
              </button>
            </div>
          </div>
        </li>

    );
  }

}

export default Wizard;

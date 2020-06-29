import React, { Component } from 'react';

class Wizard extends Component {

  render() {
    return (
        <li className={`card ${this.props.wizard.house}`}>
          <div className="decorative">
            <div className="top">
              <div className="name">
                <h3>{this.props.wizard.name}</h3>
              </div>
              <div className="border">
                <img src={this.props.wizard.image1} alt={this.props.wizard.name}/>
              </div>
            </div>
            <div className="card_bottom">
              <p className="house_name">{this.props.wizard.house}</p>
              <p className="description">Wand: {this.props.wizard.wand}</p>
              <button onClick={event => this.props.removeWizard(event, this.props.wizard)}>
                Graduate
              </button>
            </div>
          </div>
        </li>

    );
  }

}

export default Wizard;

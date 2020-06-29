import React, { Component } from 'react';

class Wizard extends Component {
  state = {
    toggle: true
  }

  handleClick = (e) => {
    this.setState({
      toggle: !this.state.toggle
    })
  }

  render() {
    // console.log(this.props.wizard.house)
    return (
        <li className={`card ${this.props.wizard.house}`}>
          <div className="decorative">
            <div className="top">
              <div className="name">
                <h3>{this.props.wizard.name}</h3>
              </div>
              <div className="border">
                <img src={this.state.toggle ? this.props.wizard.image1 : this.props.wizard.image2} 
                 alt={this.props.wizard.name}
                 onClick={this.handleClick}
                 />
                 
              </div>
            </div>
            <div className="card_bottom">
              <p className="house_name">{this.props.wizard.house}</p>
              <p className="description">Wand: {this.props.wizard.wand}</p>
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

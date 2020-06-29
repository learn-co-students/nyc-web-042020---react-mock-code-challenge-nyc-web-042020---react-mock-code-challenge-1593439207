import React, { Component } from "react";

class Wizard extends Component {
  state = {
    image: this.props.wizard.image1,
  };

  handleClick = (event) => {
    console.log(event);
    this.setState({
      image: this.props.wizard.image2,
    });
  };

  render() {
    return (
      <li className={`card ${this.props.wizard.house}`}>
        <div className="decorative">
          <div className="top">
            <div className="name">
              <h3>{this.props.wizard.name}</h3>
            </div>
            <div className="border">
              <img
                onClick={this.handleClick}
                src={this.state.image}
                alt={this.props.wizard.name}
              />
            </div>
          </div>
          <div className="card_bottom">
            <p className="house_name">{this.props.wizard.house}</p>
            <p className="description">Wand: {this.props.wizard.wand}</p>
            <button>Graduate</button>
          </div>
        </div>
      </li>
    );
  }
}

export default Wizard;

import React, { Component } from 'react';

class Wizard extends Component {
  state = {
    image: false 
  }

  handleClick = (e) => {
    const val = this.state.image 
    this.setState({
      image: !val 
    })
  }

  render() {
    return (
        <li className={`card ${this.props.wizard.house}`}>
          <div className="decorative">
            <div className="top">
              <div className="name">
                <h3>{this.props.wizard.name}</h3>
              </div>
              <div className="border">
                <img onClick={e => this.handleClick(e)} src={this.state.image ? this.props.wizard.image1 : this.props.wizard.image2} alt={this.props.wizard.name}/>
              </div>
            </div>
            <div className="card_bottom">
              <p className="house_name">{this.props.wizard.house}</p>
              <p className="description">Wand: {this.props.wizard.wand}</p>
              <button onClick={() => this.props.graduateWizard(this.props.wizard.id)}>
                Graduate
              </button>
            </div>
          </div>
        </li>

    );
  }

}

export default Wizard;

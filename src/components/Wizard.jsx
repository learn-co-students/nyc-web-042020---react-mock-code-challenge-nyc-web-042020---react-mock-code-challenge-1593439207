import React, { Component } from 'react';

class Wizard extends Component {

  constructor(props){
    super(props)
    console.log(props)
    
  }
  render() {
    return (
        <li className={`card ${this.props.name}`}>
          <div className="decorative">
            <div className="top">
              <div className="name">
                <h3>{}</h3>
              </div>
              <div className="border">
                <img src={"IMAGE HERE"} alt={"NAME HERE"}/>
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

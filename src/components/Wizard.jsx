import React, { Component } from 'react';

class Wizard extends Component {

  state = {
    clicked: false
  }

  render() {

    console.log(this.props)

    const { house, id, image1, image2, name, wand } = this.props.wizard

    return (
        <li className={`card ${house}`}>
          <div className="decorative">
            <div className="top">
              <div className="name">
                <h3>{name}</h3>
              </div>
              <div className="border">
                <img src={this.state.clicked ? image2 : image1} alt={name}/>
              </div>
            </div>
            <div className="card_bottom">
              <p className="house_name">{house}</p>
              <p className="description">Wand: {wand}</p>
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

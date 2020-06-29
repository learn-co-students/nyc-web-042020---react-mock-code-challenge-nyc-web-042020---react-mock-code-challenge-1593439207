import React, { Component } from 'react';

class Wizard extends Component {

  

  render() {
    let {name, wand, house, image1, image2} = this.props.wizard
    return (
        <li className={`card ${house}`}>
          <div className="decorative">
            <div className="top">
              <div className="name">
                <h3>{name}</h3>
              </div>
              <div className="border">
                {this.props.clicked ?
                  (<img src={image1} alt={name} onClick={this.props.handleClick}/>
                  )
                    :
                  ( 
                  <img src={image2} alt={name} onClick={this.props.handleClick}/>)
                }
              </div>
            </div>
            <div className="card_bottom">
              <p className="house_name">{house}</p>
              <p className="description">Wand: {wand}</p>
              <button onClick={() => {this.props.handleDelete(this.props.wizard.id)}}>
                Graduate
              </button>
            </div>
          </div>
        </li>

    );
  }

}

export default Wizard;

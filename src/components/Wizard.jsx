import React, { Component } from 'react';

class Wizard extends Component {

handleClick = () => {
this.props.changeClick()
}

  render() {
    let {name, wand, image1,image2, house} = this.props
    console.log(this.props.clicked, "this is the clicked state")
    return (
        <li className={`card ${house}`}>
          <div className="decorative">
            <div className="top">
              <div className="name">
                <h3>{name}</h3>
              </div>
              <div className="border">
                {this.props.clicked  ? 
    
                <img src={image2} alt={name} onClick= {this.handleClick}/>
                :
             
                <img src={image1} alt={name} onClick= {this.handleClick}/>
                }
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

import React, { Component } from 'react';

const Wizard = ({wizard, toggleImage}) =>  {
  const {house, name, wand, image, isClicked} = wizard 
  const url = isClicked ? image.image1 : image.image2 

    return (
        <li className={`card ${this.state.house}`}>
          <div className="decorative">
            <div className="top">
              <div className="name">
                <h3>{name}</h3>
              </div>
              <div className="border" onClick={() => toggleImage(wizard)}>
                <img src={url} alt={name}/>
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
export default Wizard;

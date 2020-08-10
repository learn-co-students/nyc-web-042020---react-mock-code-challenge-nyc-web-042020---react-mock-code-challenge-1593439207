import React, { Component } from 'react';

class MaraudersMap extends Component {

  render() {
    return (
      <nav>
        <h2>Houses of Hogwarts</h2>
        <select onChange={e => this.props.handleSelection(e)} id="map">
          <option value="All">All</option>
          <option value="Gryffindor">Gryffindor</option>
          <option value="Hufflepuff">Hufflepuff</option>
          <option value="Ravenclaw">Ravenclaw</option>
          <option value="Slytherin">Slytherin</option>
        </select>
      </nav>
    );
  }

}

export default MaraudersMap;

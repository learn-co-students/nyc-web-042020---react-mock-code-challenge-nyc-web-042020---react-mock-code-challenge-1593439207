import React, { Component } from 'react';

class MaraudersMap extends Component {
  state = {
    house: ""
  }

  handleChange = (evt) => {
    this.setState({
      house: evt.target.value
    })
    this.props.filterTerm(evt.target.value)
  }

  render() {
    return (
      <nav>
        <h2>Houses of Hogwarts</h2>
        <select id="map" value={this.state.house} onChange={this.handleChange}>
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

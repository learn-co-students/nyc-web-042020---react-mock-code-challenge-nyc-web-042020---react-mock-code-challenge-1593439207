import React, { Component } from 'react';

class MaraudersMap extends Component {



  handleFilter = (evt) => {
    this.props.updateWizardFilter(evt.target.value)
  }




  render() {
    console.log(this.props)

    return (
      <nav>
        <h2>Houses of Hogwarts</h2>
        <select id="map" onChange={this.handleFilter}>
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

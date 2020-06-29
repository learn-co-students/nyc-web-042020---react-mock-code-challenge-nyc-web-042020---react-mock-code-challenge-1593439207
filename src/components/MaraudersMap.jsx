import React, { Component } from 'react';

class MaraudersMap extends Component {

  handleChange = event => {
    this.props.changeSearchTerm(event.target.value)
  }

  render() {
    // console.log(this.props)
    return (
      <nav>
        <h2>Houses of Hogwarts</h2>
        <select id="map">
          <option value="All">All</option>
          <option value="Gryffindor" value={this.props.searchTerm} onChange={this.handleChange}>Gryffindor</option>
          <option value="Hufflepuff" value={this.props.searchTerm} onChange={this.handleChange}>Hufflepuff</option>
          <option value="Ravenclaw" value={this.props.searchTerm} onChange={this.handleChange}>Ravenclaw</option>
          <option value="Slytherin" value={this.props.searchTerm} onChange={this.handleChange}>Slytherin</option>
        </select>
      </nav>
    );
  }

}

export default MaraudersMap;

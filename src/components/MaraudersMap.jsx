import React from 'react';

function MaraudersMap(props) {

  const handleChange = (e) => {
    this.props.handleSelect(e.target.value)
  }

  return (
    <nav>
      <h2>Houses of Hogwarts</h2>
      <select id="map" value={props.house} onChange={handleChange}>
        <option value="All">All</option>
        <option value="Gryffindor">Gryffindor</option>
        <option value="Hufflepuff">Hufflepuff</option>
        <option value="Ravenclaw">Ravenclaw</option>
        <option value="Slytherin">Slytherin</option>
      </select>
    </nav>
  )

}

export default MaraudersMap;

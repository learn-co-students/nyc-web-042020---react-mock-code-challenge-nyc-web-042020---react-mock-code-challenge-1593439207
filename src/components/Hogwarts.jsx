import React, { Component } from 'react';
import GreatHall from './GreatHall'
import SortingHat from './SortingHat'
import MaraudersMap from './MaraudersMap'

class Hogwarts extends Component {


  render() {
    return (
      <main>
        <MaraudersMap/>
        <GreatHall props={this.props}/>
        <SortingHat/>
      </main>
    )
  }

}

export default Hogwarts;

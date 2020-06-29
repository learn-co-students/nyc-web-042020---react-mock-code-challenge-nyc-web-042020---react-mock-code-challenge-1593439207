import React, { Component } from 'react';
import GreatHall from './GreatHall'
import SortingHat from './SortingHat'
import MaraudersMap from './MaraudersMap'

class Hogwarts extends Component {

  render() {
    const wizardArray = this.state
    return (
      <main>
        <MaraudersMap/>
        <GreatHall wizard={wizardArray}/>
        <SortingHat/>
      </main>
    )
  }

}

export default Hogwarts;

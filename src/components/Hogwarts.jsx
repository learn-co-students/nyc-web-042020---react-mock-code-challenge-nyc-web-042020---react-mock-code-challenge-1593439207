import React, { Component } from 'react';
import GreatHall from './GreatHall'
import SortingHat from './SortingHat'
import MaraudersMap from './MaraudersMap'

class Hogwarts extends Component {

  render() {

    return (
      <main>
        <MaraudersMap houseFilter={this.props.houseFilter}/>
        <GreatHall 
          wizards={this.props.wizards}
          deleteWizard={this.props.deleteWizard}/>
        <SortingHat addNewWizard={this.props.addNewWizard}/>
      </main>
    )
  }

}

export default Hogwarts;

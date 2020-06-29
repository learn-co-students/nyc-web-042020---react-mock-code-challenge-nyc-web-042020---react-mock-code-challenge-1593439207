import React, { Component } from 'react';
import GreatHall from './GreatHall'
import SortingHat from './SortingHat'
import MaraudersMap from './MaraudersMap'

class Hogwarts extends Component {




  render() {
    let arrayOfComponents = this.props.wizardList.map((wizard) => {
      return  <GreatHall
      wizardItem = {wizard}
      key = {wizard.id}
      toggler = {this.props.toggler}
      />
    })
    return (
      <main>
        <MaraudersMap/>
      {  arrayOfComponents}
        <SortingHat/>
      </main>
    )
  }

}

export default Hogwarts;

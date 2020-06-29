import React, { Component } from 'react';
import GreatHall from './GreatHall'
import SortingHat from './SortingHat'
import MaraudersMap from './MaraudersMap'
// import App from './App'

class Hogwarts extends Component {

  state = {
    wizardList: []
  }
  
    componentDidMount(){
      fetch("http://localhost:4000/wizards")
        .then(r => r.json())
        .then((arrayOfWizards) => {
          this.setState({
            wizardList: arrayOfWizards
          })
        })
    }

  render() {
    const {wizardList} = this.state
    return (
      <main>
        <MaraudersMap/>
        <GreatHall
          wizards={wizardList}
        />
        <SortingHat/>
      </main>
    )
  }

}

export default Hogwarts;

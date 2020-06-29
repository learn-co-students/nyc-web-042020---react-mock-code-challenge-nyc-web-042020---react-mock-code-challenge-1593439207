import React, { Component } from 'react';
import GreatHall from './GreatHall'
import SortingHat from './SortingHat'
import MaraudersMap from './MaraudersMap'

class Hogwarts extends Component {
  state = {
    wizardList: [],
    filter: ''
  }

  componentDidMount(){
    fetch(`http://localhost:4000/wizards`)
    .then(res => res.json())
    .then(data => {
      this.setState({
        wizardList: data
      })
    })  
  }

  newKid = (newWizard) => {
    let wizList = [...this.state.wizardList, newWizard]
    this.setState({
      wizardList: wizList
    })
  }

  filterWizards = () => {
    
  }

  render() {
    // console.log(this.state.wizardList)
    return (
      <main>
        <MaraudersMap/>
        <GreatHall wizardList={this.state.wizardList} />
        <SortingHat newKid={this.newKid}/>
      </main>
    )
  }

}

export default Hogwarts;

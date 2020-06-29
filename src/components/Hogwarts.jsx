import React, { Component } from 'react';
import GreatHall from './GreatHall'
import SortingHat from './SortingHat'
import MaraudersMap from './MaraudersMap'

class Hogwarts extends Component {

  state = {
    wizardList: [], 
    clicked: false,
  }

  componentDidMount(){
    fetch('http://localhost:4000/wizards')
    .then(resp => resp.json())
    .then((wizard)=>{
    this.setState( 
      {wizardList: wizard }
    )
  
  })

}

changeClick = () => {
  this.setState((prevState)=>{
   return  {clicked: !prevState.clicked}
  })
  console.log("im clicking and this is ", this.state.clicked)
}

addWizardToArray = (newWizard) =>{
this.setState((prevState)=>{
  return {wizardList: [...prevState.wizardList, newWizard]}

})
}

filterWizards = (chosenHouse) =>{
  let house = this.state.wizardList
  house = house.filter((wizard) =>{
    return wizard.house.includes(chosenHouse)
  })

this.setState({wizardList: [...house]})
 
}




  render() {
    return (
      <main>
        <MaraudersMap
        wizardList={this.state.wizardList}
        filterWizards={this.filterWizards}/>
        <GreatHall
        wizardList = {this.state.wizardList}
        changeClick = {this.changeClick}/>
        <SortingHat 
        addWizardToArray={this.addWizardToArray}/>
      </main>
    )
  }

}

export default Hogwarts;

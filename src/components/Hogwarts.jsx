import React, { Component } from 'react';
import GreatHall from './GreatHall'
import SortingHat from './SortingHat'
import MaraudersMap from './MaraudersMap'

class Hogwarts extends Component {
state={
  wizards:[],
  filter:'All',
  sortingForm:{
    name:'',
    wand:'',
    house:'',
    image1:'',
    image2:'',
  }
}
  componentDidMount(){
    this.getWizards()
  }
handleChange=(e)=>{
  this.setState({
    sortingForm:{
      ...this.state.sortingForm,
      [e.target.name]:e.target.value,
    }
  })
}
handleSelection=(e)=>{
  this.setState({
    filter:e.target.value
  })
  console.log(e.target.value)
}
handleSubmit=(e)=>{
  e.preventDefault();
  const wizard = {
    name:e.target.name.value,
    wand:e.target.wand.value,
    house:e.target.house.value,
    image1:e.target.image1.value,
    image2:e.target.image2.value,
  }
  fetch('http://localhost:4000/wizards',{
    method:'POST',
    headers:{
      'content-type':'application/json',
      accept:'application/json'
    },
    body:JSON.stringify(wizard)
  }).then(r=>r.json()).then(data=>{
    this.setState({
      sortingForm:{
        name:'',
        wand:'',
        house:'',
        image1:'',
        image2:'',
      }
    })
    this.getWizards()
  })
}
  getWizards=()=>{
    fetch('http://localhost:4000/wizards')
    .then(r=>r.json())
    .then(wiz=>this.setState({wizards:wiz}));
  }
  graduateWizard=(id)=>{
    fetch(`http://localhost:4000/wizards/${id}`,{
      method:'DELETE'
    }).then(r=>r.json()).then(data=>this.getWizards())
  }
filterWizards=()=>{
  if(this.state.filter==='All'){
  return this.state.wizards;
  }else{
    return this.state.wizards.filter(wiz=>{
      if(wiz.house===this.state.filter) return true;
    });

  }
}
  render() {
    return (
      <main>
        <MaraudersMap handleSelection={this.handleSelection}/>
        <GreatHall wizards={this.filterWizards()} graduateWizard={this.graduateWizard}/>
        <SortingHat sortingForm={this.state.sortingForm} handleSubmit={this.handleSubmit}handleChange={this.handleChange}/>
      </main>
    )
  }

}

export default Hogwarts;

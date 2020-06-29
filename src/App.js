import React, { Component } from 'react';
import './App.css';

import Header from './components/Header'
import Hogwarts from './components/Hogwarts'

class App extends Component {

// state = {
//   wizardList: []
// }

//   componentDidMount(){
//     fetch("http://localhost:4000/wizards")
//       .then(r => r.json())
//       .then((arrayOfWizards) => {
//         this.setState({
//           wizardList: arrayOfWizards
//         })
//       })
//   }


  render() {
//     const {wizardList} = this.state

    return (
      <div className="App">
        <Header />
        <Hogwarts 
          // wizards = {wizardList}
  
        />
      </div>
    );
  }
  
}

export default App;

// As a user, I should be able to:
// * Render a list of wizards from the `json-server` backend onto our React frontend, using the given `Wizard` component. The `Wizard` component should display the wizard's name, wand core and the house they are in. By default, Image 1 of the wizard should be shown.

// NEED GET FETCH in wizard
//     - show name
//     - wand core
//     - house
//     - default image 1

// * Change the picture of a `Wizard` when I click on the image. Like most pictures in Hogwarts, these wizarding cards should also move around and when we click on the image, it should toggle back and forth between Image 1 and Image 2. Keep in mind that each picture should behave independent of one another.

// NEED ONCLICK HANDLER
//     - set state image 1 or image 2
//     - onclick switches state of urls

// * Log a new `Wizard` through the use of the `SortingHat`. When the form within the `SortingHat` is submitted, a new wizard should be persisted to the backend with the information that was filled out in the form. The new `Wizard` should also be rendered out on the frontend when the form submits, without the page needing to refresh.

// NEED POST FETCH
//     - update list render when form submits

// * Filter out the wizards by their houses. `MaraudersMap` is the component that will decide whether all the wizards in the database is rendered or only wizards from a specific house is rendered. As an option is selected, the wizards being shown on the React frontend should change without the page needing to refresh.

// NEED FILTER
//     - filter by house name
//     - need searchterm in state

// * Graduate a `Wizard` from Hogwarts. When the Graduate button is clicked, the `Wizard` should be deleted from the backend and the corresponding component should be removed from the page without the page refreshing. 

// NEED DELETE FETCH
//     - update list render when deleted
//     - filter render list by id
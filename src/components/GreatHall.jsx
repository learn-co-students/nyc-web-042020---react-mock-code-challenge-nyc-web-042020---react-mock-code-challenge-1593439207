import React from 'react';
import Wizard from './Wizard'

const GreatHall = (props) => {

  return (
    <section>
      <h2>Students of Hogwarts</h2>
      <ul className="cards">
      {props.wizards.map((wizard) => 
        // <li>
        <Wizard wizard={wizard} removeWizard={props.removeWizard}/>
        // </li>
      )}
      
      </ul>
    </section>
  )
}

export default GreatHall;

import React from 'react';
import Wizard from './Wizard'

const GreatHall = (props) => {
  return (
    <section>
      <h2>Students of Hogwarts</h2>
      <ul className="cards">
        {/* Render Wizards Here*/}
        {props.wizards.map(wizard => <Wizard key={wizard.id} {...wizard} deleteWizardFromArr={props.deleteWizardFromArr}/>)}
      </ul>
    </section>
  )
}

export default GreatHall;

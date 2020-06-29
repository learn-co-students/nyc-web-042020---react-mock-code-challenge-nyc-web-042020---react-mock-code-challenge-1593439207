import React from 'react';
import Wizard from './Wizard'

const GreatHall = (props) => {

  let wizards = props.wizards.map((wizard) => {
    return <Wizard wizard={wizard} key={wizard.id} removeWizard={props.removeWizard}/>
  })

  return (
    <section>
      <h2>Students of Hogwarts</h2>
      <ul className="cards">
        {wizards}
      </ul>
    </section>
  )
}

export default GreatHall;

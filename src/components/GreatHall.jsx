import React from 'react';
import Wizard from './Wizard'

const GreatHall = (props) => {
  let arrayOfWizards = props.wizards.map((wizardPOJO) => {
    return <Wizard
      deleteWizard={props.deleteWizard}
      wizard={wizardPOJO}
      key={wizardPOJO.key}
    />
  })

  return (
    <section>
      <h2>Students of Hogwarts</h2>
      <ul className="cards">
        {arrayOfWizards}
      </ul>
    </section>
  )
}

export default GreatHall;

import React from 'react';
import Wizard from './Wizard'

const GreatHall = (props) => {

  function renderWizards() {
    return props.wizards.map(wizard => <Wizard key={wizard.id} wizard={wizard} handleDelete={props.handleDelete}/>)
  }

  return (
    <section>
      <h2>Students of Hogwarts</h2>
      <ul className="cards">
        {renderWizards()}
      </ul>
    </section>
  )
}

export default GreatHall;

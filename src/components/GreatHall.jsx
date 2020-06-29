import React from 'react';
import Wizard from './Wizard'

const GreatHall = (props) => {
let renderWizards = props.wizards.map( wizards => {
  return <Wizard key={wizards.id} wizard={wizards} />
})
  return (
    <section>
      <h2>Students of Hogwarts</h2>
      <ul className="cards">
        {renderWizards}
      </ul>
    </section>
  )
}

export default GreatHall;

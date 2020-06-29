import React from 'react';
import Wizard from './Wizard'

const GreatHall = (props) => {

  let wizardObj = props.wizards.map(wizard => {
    return <Wizard
    key={wizard.id}
    wizard={wizard}
    handleDelete={props.handleDelete}
    handleClick={props.handleClick}
    clicked={props.clicked}
    />
  })

  return (
    <section>
      <h2>Students of Hogwarts</h2>
      <ul className="cards">
        {wizardObj}
      </ul>
    </section>
  )
}

export default GreatHall;

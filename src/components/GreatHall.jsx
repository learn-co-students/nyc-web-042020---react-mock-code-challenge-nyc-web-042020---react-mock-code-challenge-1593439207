import React from 'react';
import Wizard from './Wizard'

const GreatHall = (props) => {
  return (
    <section>
      <h2>Students of Hogwarts</h2>
      <ul className="cards">
        {props.wizards.map((wizard) => {
          return <Wizard key={wizard.id} wizardObj={wizard}/>
        })}
      </ul>
    </section>
  )
}

export default GreatHall;

import React from 'react';
import Wizard from './Wizard'

const GreatHall = (props) => {
  return (
    <section>
      <h2>Students of Hogwarts</h2>
      <ul className="cards">
        {props.wizards.map(wiz=>
          <Wizard wizard={wiz} key={wiz.id} graduateWizard={props.graduateWizard}/>
        )}
      </ul>
    </section>
  )
}

export default GreatHall;

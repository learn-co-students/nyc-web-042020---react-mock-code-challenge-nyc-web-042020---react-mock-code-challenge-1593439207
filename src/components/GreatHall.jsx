import React from 'react';
import Wizard from './Wizard'
// import Wizards from './Hogwarts'

const GreatHall = (props) => {
  // console.log(props.wizards)
  let arrayOfWizards = props.wizards.map((wizardPOJO) => {
    return <Wizard 
    wizard = {wizardPOJO}
    key = {wizardPOJO.id}
    />
  })

  return (
    <section>
      <h2>Students of Hogwarts</h2>
      <ul className="cards">
        { arrayOfWizards }
      </ul>
    </section>
  )
}

export default GreatHall;

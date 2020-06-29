import React from 'react';
import Wizard from './Wizard'

const GreatHall = (props) => {
let wizardArr = props.wizardList.map((wizard)=>{
  return (
    <Wizard
    name = {wizard.name}
    key = {wizard.id}
    wand = {wizard.wand}
    image1 = {wizard.image1}
    image2 = {wizard.image2}
    house = {wizard.house}
    changeClick = {props.changeClick}
    />
  )
})
  return (
    <section>
      <h2>Students of Hogwarts</h2>
      <ul className="cards">
        {wizardArr}
      </ul>
    </section>
  )
}

export default GreatHall;

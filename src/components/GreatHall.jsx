import React from 'react';
import Wizard from './Wizard'

const GreatHall = (props) => {
  
  return (
    <section>
      <h2>Students of Hogwarts</h2>
      <ul className="cards">
        <Wizard {...props}/>
      </ul>
    </section>
  )
}

export default GreatHall;

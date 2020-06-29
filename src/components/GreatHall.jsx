import React from "react";
import Wizard from "./Wizard";

let GreatHall = (props) => {
  let wizCards = props.wizards.map((wizObj) => {
    return <Wizard key={wizObj.id} wizard={wizObj} />;
  });

  return (
    <section>
      <h2>Students of Hogwarts</h2>
      <ul className="cards">{wizCards}</ul>
    </section>
  );
};

export default GreatHall;

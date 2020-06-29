import React, { Component } from "react";
import GreatHall from "./GreatHall";
import SortingHat from "./SortingHat";
import MaraudersMap from "./MaraudersMap";

class Hogwarts extends Component {
  render() {
    return (
      <main>
        <MaraudersMap />
        <GreatHall wizards={this.props.wizardArray} />
        <SortingHat />
      </main>
    );
  }
}

export default Hogwarts;

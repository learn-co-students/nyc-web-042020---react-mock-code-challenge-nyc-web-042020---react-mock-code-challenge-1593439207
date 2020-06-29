import React, { Component } from "react";
import "./App.css";

import Header from "./components/Header";
import Hogwarts from "./components/Hogwarts";
const wizards = "http://localhost:4000/wizards";

class App extends Component {
  state = {
    wizardArray: [],
  };

  componentDidMount() {
    fetch(wizards)
      .then((r) => r.json())
      .then((wizards) => {
        this.setState({
          wizardArray: wizards,
        });
      });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Hogwarts wizardArray={this.state.wizardArray} />
      </div>
    );
  }
}

export default App;

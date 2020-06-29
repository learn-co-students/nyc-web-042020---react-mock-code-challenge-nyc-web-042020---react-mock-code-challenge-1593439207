import React, { Component } from 'react';

class Wizard extends Component {

  state = {
    imageClicked: false
  }

  handleClick = (evt) => {
    this.setState((prevState) => this.setState({imageClicked: !prevState.imageClicked}))
  }

  handleGraduate = (evt) => {
    //console.log(this.props.wizard.id)
    fetch(`http://localhost:4000/wizards/${this.props.wizard.id}`, {
      method: "DELETE"
    }).then(r => r.json).then((wizard) => this.props.removeWizard(this.props.wizard.id))
  }

  componentWillUnmount(){
    console.log("removed")
  }
  render() {
    let {name, wand, house, image1, image2} = this.props.wizard
    return (
        <li className={`card ${house}`}>
          <div className="decorative">
            <div className="top">
              <div className="name">
                <h3>{name}</h3>
              </div>
              <div className="border">
                { this.state.imageClicked
                  ?
                  <img src={image2} alt={name} onClick={this.handleClick}/>
                  :
                  <img src={image1} alt={name} onClick={this.handleClick}/>

                }
              </div>
            </div>
            <div className="card_bottom">
              <p className="house_name">{house}</p>
              <p className="description">Wand: {wand}</p>
              <button onClick={this.handleGraduate}>
                Graduate
              </button>
            </div>
          </div>
        </li>

    );
  }

}

export default Wizard;

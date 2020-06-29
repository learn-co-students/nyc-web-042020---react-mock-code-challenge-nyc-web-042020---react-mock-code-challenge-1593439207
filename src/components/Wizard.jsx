import React, { Component } from 'react';

class Wizard extends Component {

state = {
  image: ""

}


  handleClick = (event) => {
    console.log(event.target.src)
    console.log(this.props.wizard)
    let {name, wand, house, image1, image2} = this.props.wizard

// need to refactor into controlled component
    // {
    //   event.target.src === this.props.wizard.image1
    //   ?
    //   event.target.src = this.props.wizard.image2
    //   :
    //   event.target.src = this.props.wizard.image1

    // }

    {
      event.target.src === image1
      ?
      event.target.src = image2
      :
      event.target.src = image1

    }

    // if (event.target.src === this.props.wizard.image1){
    //   event.target.src = this.props.wizard.image2
    //   console.log('image 1 click')
    //   // event.target.src = image2
    // }

    // if (event.target.src === this.props.wizard.image2){
    //   event.target.src = this.props.wizard.image1
    //   console.log('image 2 click')
    // }

  }



  render() {
    // console.log(this.props)

    // console.log (name)
    //     - show name
//     - wand core
//     - house
//     - default image 1

let {name, wand, house, image1, image2} = this.props.wizard

// let partialState = {
//     this.setState({
//       image: image1
//     })
// }

// this.setState({image: image1})

// let {image} = this.state

    return (
        <li className={`card ${house}`}>
          <div className="decorative">
            <div className="top">
              <div className="name">
                <h3>{name}</h3>
              </div>
              <div className="border">
                <img 
                src={image1} alt={name}
                onClick={ this.handleClick }
                />
              </div>
            </div>
            <div className="card_bottom">
              <p className="house_name">{house}</p>
              <p className="description">Wand: {wand}</p>
              <button>
                Graduate
              </button>
            </div>
          </div>
        </li>

    );
  }

}

export default Wizard;

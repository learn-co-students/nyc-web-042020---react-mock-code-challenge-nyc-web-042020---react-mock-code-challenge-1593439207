import React, { Component } from 'react';

class Wizard extends Component {
  getOtherPic=(img)=>{
    if(img===this.props.wizard.image1){
      return this.props.wizard.image2
    }else{
      return this.props.wizard.image1
    }
  }
handleClick=(e)=>{
  e.target.src=this.getOtherPic(e.target.src)
}
  render() {
    return (
        <li className={`card ${this.props.wizard.house}`}>
          <div className="decorative">
            <div className="top">
              <div className="name">
                <h3>{this.props.wizard.name}</h3>
              </div>
              <div className="border">
                <img onClick={e=>this.handleClick(e)} src={this.props.wizard.image1} alt={this.props.wizard.name}/>
              </div>
            </div>
            <div className="card_bottom">
              <p className="house_name">{this.props.wizard.house}</p>
              <p className="description">Wand: {this.props.wizard.wand}</p>
              <button onClick={()=>this.props.graduateWizard(this.props.wizard.id)}>
                Graduate
              </button>
            </div>
          </div>
        </li>

    );
  }

}

export default Wizard;

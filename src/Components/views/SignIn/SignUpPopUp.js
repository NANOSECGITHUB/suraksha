import React, { Component } from "react";
import SignUpPage from './SignUpPage'


export default class SignUpPopUp extends Component {
  handleClick = () => {
    this.props.toggle();
  };

  render() {
    return ( 
      <div className="modal" >
         <div className="modal_content" width="80%"> 
          <span className="close" onClick={this.handleClick}>
           &Chi;
          </span>
          <form >
            <SignUpPage closeWindow={this.handleClick}/>
          </form>
        </div>
       </div>
    );
  }
}

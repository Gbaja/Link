import React, { Component } from "react";

class AcceptButton extends Component {
  onclickHandler = () => {
    console.log(this.props.user);
  };
  render() {
    return (
      <div>
        <button onClick={this.onclickHandler}>Accept</button>
      </div>
    );
  }
}

export default AcceptButton;

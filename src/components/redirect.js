import React, { Component } from "react";

class RedirectPage extends Component {
  goBackBtn = () => {
    this.props.history.goBack();
  };
  render() {
    return (
      <div>
        <h1>Unauthorised user </h1>
        <button onClick={this.goBackBtn}>Go back</button>
      </div>
    );
  }
}

export default RedirectPage;

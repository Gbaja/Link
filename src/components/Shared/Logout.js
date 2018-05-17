import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { logOut } from "../../actions/get_requests";

class LogOutButton extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  onClick() {
    this.props.logOut(() => {
      console.log("logout");
      this.props.history.push("/");
    });
  }

  render() {
    return <button onClick={this.onClick}>Log out </button>;
  }
}

export default withRouter(connect(null, { logOut })(LogOutButton));

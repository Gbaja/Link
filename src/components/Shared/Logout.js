import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { logOut } from "../../actions/get_requests";
import { FormsSubmitButton } from "../Shared/Shared.styled";

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
    return (
      <FormsSubmitButton onClick={this.onClick}>Log out </FormsSubmitButton>
    );
  }
}

export default withRouter(connect(null, { logOut })(LogOutButton));

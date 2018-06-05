import React, { Component } from "react";
import { connect } from "react-redux";

import { pendingAction } from "../../actions/put_requests";
import { FormsSubmitButton } from "../Shared/Shared.styled";

class ActionButtons extends Component {
  acceptHandler = () => {
    const body = {
      email: this.props.user,
      status: "Accept"
    };
    this.props.pendingAction(body);
    // .then(res => {
    //   window.location.reload();
    // });
  };
  rejectHandler = () => {
    const body = {
      email: this.props.user,
      status: "Reject"
    };
    this.props.pendingAction(body);
  };

  render() {
    return (
      <div>
        <FormsSubmitButton onClick={this.acceptHandler}>
          Accept
        </FormsSubmitButton>
        <FormsSubmitButton onClick={this.rejectHandler}>
          Reject
        </FormsSubmitButton>
      </div>
    );
  }
}

export default connect(
  null,
  { pendingAction }
)(ActionButtons);

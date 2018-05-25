import React, { Component } from "react";
import { connect } from "react-redux";

import { pendingAction } from "../../actions/put_requests";

class ActionButtons extends Component {
  acceptHandler = () => {
    const body = {
      id: this.props.user,
      status: "Accept"
    };
    this.props.pendingAction(body);
    // .then(res => {
    //   window.location.reload();
    // });
  };
  rejectHandler = () => {
    const body = {
      id: this.props.user,
      status: "Reject"
    };
    this.props.pendingAction(body).then(res => {
      window.location.reload();
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.acceptHandler}>Accept</button>
        <button onClick={this.rejectHandler}>Reject</button>
      </div>
    );
  }
}

export default connect(null, { pendingAction })(ActionButtons);

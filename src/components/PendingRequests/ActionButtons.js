import React, { Component } from "react";
import { connect } from "react-redux";

import { mentorshipRequestAction } from "../../actions/put_requests";

class MentorActionButtons extends Component {
  acceptHandler = () => {
    const body = {
      requestId: this.props.request,
      status: "Accept"
    };
    console.log(body);
    this.props.mentorshipRequestAction(body);
  };
  rejectHandler = () => {
    const body = {
      requestId: this.props.request,
      status: "Reject"
    };
    this.props.mentorshipRequestAction(body);
  };

  render() {
    console.log("REQUEST: ", this.props.request);
    return (
      <div>
        <button onClick={this.acceptHandler}>Accept</button>
        <button onClick={this.rejectHandler}>Reject</button>
      </div>
    );
  }
}

export default connect(null, { mentorshipRequestAction })(MentorActionButtons);

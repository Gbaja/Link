import React, { Component } from "react";
import { connect } from "react-redux";

import { mentorshipRequestAction } from "../../actions/put_requests";
import { FormsSubmitButton } from "../Shared/Shared.styled";

class MentorActionButtons extends Component {
  acceptHandler = () => {
    const body = {
      requestId: this.props.request,
      status: "Accept"
    };
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
  { mentorshipRequestAction }
)(MentorActionButtons);

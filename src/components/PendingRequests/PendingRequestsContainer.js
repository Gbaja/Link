import React, { Component } from "react";
import { connect } from "react-redux";

import Alert from "../Shared/Alert";
import {
  fetchMentorPendingRequests,
  fetchMenteePendingRequests
} from "../../actions/get_requests";
import { resetError } from "../../actions/post_requests";
import PendingRequests from "./PendingRequests";
import Heading from "../Shared/Header";

class PendingApplicationsContainer extends Component {
  componentDidMount() {
    if (this.props.pendingRequests.length === 0) {
      if (this.props.auth.accountType === "Mentor") {
        return this.props.fetchMentorPendingRequests(this.props.auth.id);
      }
      if (this.props.auth.accountType === "Mentee") {
        return this.props.fetchMenteePendingRequests(this.props.auth.id);
      }
    }
  }

  render() {
    const { alert, pendingRequests } = this.props;
    return (
      <div>
        <Heading />
        <h1> Pending requests </h1>
        {alert && <Alert alert={alert} />}
        <PendingRequests data={pendingRequests} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  pendingRequests: state.pendingRequests,
  auth: state.auth,
  alert: state.alert
});

export default connect(mapStateToProps, {
  resetError,
  fetchMentorPendingRequests,
  fetchMenteePendingRequests
})(PendingApplicationsContainer);

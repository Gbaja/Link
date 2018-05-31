import React, { Component } from "react";
import { connect } from "react-redux";

import Alert from "../Shared/Alert";
import { fetchPendingRequests } from "../../actions/get_requests";
import { resetError } from "../../actions/post_requests";
import PendingRequests from "./PendingRequests";

class PendingApplicationsContainer extends Component {
  componentDidMount() {
    if (this.props.pendingRequests.length === 0) {
      this.props.fetchPendingRequests(this.props.auth.email);
    }
  }

  render() {
    const { alert, pendingRequests } = this.props;
    console.log(pendingRequests);
    return (
      <div>
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

export default connect(mapStateToProps, { resetError, fetchPendingRequests })(
  PendingApplicationsContainer
);

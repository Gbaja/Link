import React, { Component } from "react";
import { connect } from "react-redux";

import Alert from "../Shared/Alert";
import { fetchPending } from "../../actions/get_requests";
import { resetError } from "../../actions/post_requests";
import PendingApplications from "./PendingApplications";

class PendingApplicationsContainer extends Component {
  componentDidMount() {
    if (this.props.pending.length === 0) {
      this.props.fetchPending(this.props.auth.universityName);
    }
  }

  // componentWillUnmount() {
  //   this.props.resetError();
  // }

  render() {
    const { alert, pending } = this.props;
    return (
      <div>
        {alert && <Alert alert={alert} />}
        <PendingApplications data={pending} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  pending: state.pending,
  auth: state.auth,
  alert: state.alert
});

export default connect(mapStateToProps, { fetchPending, resetError })(
  PendingApplicationsContainer
);

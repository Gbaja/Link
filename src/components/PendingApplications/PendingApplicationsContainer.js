import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchPending } from "../../actions/get_requests";
import PendingApplications from "./PendingApplications";

class PendingApplicationsContainer extends Component {
  componentDidMount() {
    if (this.props.pending.length === 0) {
      this.props.fetchPending(this.props.auth.universityName);
    }
  }

  render() {
    console.log(this.props.pending);
    if (this.props.pending.length === 0) return <div> Loading </div>;
    return (
      <div>
        <PendingApplications data={this.props.pending} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  pending: state.pending,
  auth: state.auth
});

export default connect(mapStateToProps, { fetchPending })(
  PendingApplicationsContainer
);

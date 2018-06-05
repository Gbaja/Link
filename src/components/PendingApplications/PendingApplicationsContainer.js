import React, { Component } from "react";
import { connect } from "react-redux";

import Alert from "../Shared/Alert";
import { fetchPending } from "../../actions/get_requests";
import { resetError } from "../../actions/post_requests";
import PendingApplications from "./PendingApplications";
import Header from "../Shared/Header";
import { FormsSubmitButton, Links } from "../Shared/Shared.styled";

class PendingApplicationsContainer extends Component {
  componentDidMount() {
    if (this.props.pending.length === 0) {
      this.props.fetchPending(this.props.auth.universityName);
    }
  }

  render() {
    const { alert, pending } = this.props;
    return (
      <div>
        <Header />
        <FormsSubmitButton>
          <Links to="/university_dashboard">Back to dashboard</Links>
        </FormsSubmitButton>
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

export default connect(
  mapStateToProps,
  { fetchPending, resetError }
)(PendingApplicationsContainer);

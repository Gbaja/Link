import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Alert from "../Shared/Alert";
import {
  fetchMentorPendingRequests,
  fetchMenteePendingRequests
} from "../../actions/get_requests";
import { resetError } from "../../actions/post_requests";
import Header from "../Shared/Header";
import PendingMenteeRequests from "./PendingMenteeRequests";
import PendingMentorRequests from "./PendingMentorRequests";
import { FormsSubmitButton, Links } from "../Shared/Shared.styled";
import Loading from "../Shared/Loading";

class PendingApplicationsContainer extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);

    if (!this.props.pendingRequests) {
      if (this.props.auth.accountType === "Mentor") {
        return this.props.fetchMentorPendingRequests(this.props.auth.id);
      } else if (this.props.auth.accountType === "Mentee") {
        return this.props.fetchMenteePendingRequests(this.props.auth.id);
      }
    }
  }

  renderContent = () => {
    console.log("PENDING REQUESTTTSSSS: ", this.props.pendingRequests);
    return !!this.props.pendingRequests ? this.renderRequests() : <Loading />;
  };

  renderRequests = () => {
    const { pendingRequests, auth } = this.props;
    return auth.accountType === "Mentor" ? (
      <PendingMentorRequests data={pendingRequests} />
    ) : (
      <PendingMenteeRequests data={pendingRequests} />
    );
  };

  render() {
    const { alert, auth } = this.props;
    const accountType = auth.accountType.toLowerCase();
    return (
      <div>
        <Header />
        <FormsSubmitButton>
          <Links to={`${accountType}/dashboard`}>Back to dashboard</Links>
        </FormsSubmitButton>
        <h1> Pending requests </h1>
        {alert && <Alert alert={alert} />}
        {this.renderContent()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  pendingRequests: state.pendingRequests,
  auth: state.auth,
  alert: state.alert
});

export default connect(
  mapStateToProps,
  {
    resetError,
    fetchMentorPendingRequests,
    fetchMenteePendingRequests
  }
)(PendingApplicationsContainer);

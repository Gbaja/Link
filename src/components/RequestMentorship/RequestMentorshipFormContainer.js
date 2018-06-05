import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

import { resetError, requestMentorship } from "../../actions/post_requests";
import { RESET_ERROR } from "../../actions/types";
import RequestMentorshipForm from "./RequestMentorshipForm";
import Alert from "../Shared/Alert";
import Header from "../Shared/Header";
import { FormsSubmitButton, Links } from "../Shared/Shared.styled";

class RequestMentorshipFormContainer extends Component {
  componentDidMount() {
    this.props.resetError();
  }

  handleFormSubmission = values => {
    values.MentorRegistrationId = Number(this.props.match.params.id);
    values.MenteeRegistrationId = Number(this.props.auth.id);
    console.log(values);
    this.props.requestMentorship(values);
  };
  render() {
    const { handleSubmit, alert } = this.props;
    return (
      <div>
        <Header />
        <FormsSubmitButton>
          <Links to={`/profile/Mentor/${this.props.match.params.id}`}>
            Back to profile
          </Links>
        </FormsSubmitButton>
        {alert && <Alert alert={alert} />}
        <RequestMentorshipForm
          onSubmit={this.handleFormSubmission}
          handleSubmit={handleSubmit}
        />
      </div>
    );
  }
}
const validate = values => {
  const errors = {};
  return errors;
};

const mapStateToProps = state => ({
  alert: state.alert,
  auth: state.auth
});

export default reduxForm({
  validate,
  form: "RequestForm"
})(
  withRouter(
    connect(
      mapStateToProps,
      { resetError, requestMentorship }
    )(RequestMentorshipFormContainer)
  )
);

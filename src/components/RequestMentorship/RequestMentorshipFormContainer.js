import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

import { resetError, requestMentorship } from "../../actions/post_requests";
import { RESET_ERROR } from "../../actions/types";
import RequestMentorshipForm from "./RequestMentorshipForm";
import Alert from "../Shared/Alert";

class RequestMentorshipFormContainer extends Component {
  componentDidMount() {
    this.props.resetError();
  }

  handleFormSubmission = values => {
    values.mentorId = Number(this.props.match.params.id);
    values.menteeEmail = this.props.auth.email;
    console.log(values);
    this.props.requestMentorship(values);
  };
  render() {
    const { handleSubmit, alert } = this.props;
    return (
      <div>
        <h1>Mentorship Request Form </h1>
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
    connect(mapStateToProps, { resetError, requestMentorship })(
      RequestMentorshipFormContainer
    )
  )
);

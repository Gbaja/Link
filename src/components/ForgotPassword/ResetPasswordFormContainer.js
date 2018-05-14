import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { resetPassword, resetError } from "../../actions/post_requests";
import { RESET_ERROR } from "../../actions/types";
import ResetPasswordForm from "./ResetPasswordForm";

class ResetPasswordFormContainer extends Component {
  componentDidMount() {
    this.props.resetError();
  }

  handleFormSubmission = values => {
    const params = new URL(document.location).searchParams;
    const token = params.get("token");
    values.token = token.replace(/\s/g, "+");
    this.props.resetPassword(values);
  };
  render() {
    const { handleSubmit, alert } = this.props;
    return (
      <div>
        <h1> Change password </h1>
        <ResetPasswordForm
          onSubmit={this.handleFormSubmission}
          handleSubmit={handleSubmit}
          alert={alert}
        />
      </div>
    );
  }
}
const validate = values => {
  const errors = {};
  if (!values.password) {
    errors.password = "Please enter a password";
  }
  if (!values.confirmPassword || values.password !== values.confirmPassword) {
    errors.confirmPassword =
      "Please confirm your password and make sure the values matches.";
  }
  return errors;
};

const mapStateToProps = state => ({
  alert: state.alert
});

export default reduxForm({
  validate,
  form: "ResetPasswordForm"
})(
  connect(mapStateToProps, { resetPassword, resetError })(
    ResetPasswordFormContainer
  )
);

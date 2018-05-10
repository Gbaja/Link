import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { resetError } from "../../actions/post_requests";
import { RESET_ERROR } from "../../actions/types";
import ResetPasswordForm from "./ResetPasswordForm";

class ResetPasswordFormContainer extends Component {
  componentDidMount() {
    this.props.resetError();
  }

  handleFormSubmission = values => {
    console.log(values);
  };
  render() {
    const { handleSubmit, error } = this.props;
    return (
      <div>
        <h1> Change password </h1>
        <ResetPasswordForm
          onSubmit={this.handleFormSubmission}
          handleSubmit={handleSubmit}
          error={error}
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
  error: state.error
});

export default reduxForm({
  validate,
  form: "ResetPasswordForm"
})(connect(mapStateToProps, { resetError })(ResetPasswordFormContainer));

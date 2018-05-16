import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { forgotPassword, resetError } from "../../actions/post_requests";
import { RESET_ERROR } from "../../actions/types";
import ForgotPasswordForm from "./ForgotPasswordForm";

class ForgotPasswordFormContainer extends Component {
  componentDidMount() {
    this.props.resetError();
  }

  handleFormSubmission = values => {
    this.props.forgotPassword(values);
  };
  render() {
    const { handleSubmit, alert } = this.props;
    return (
      <div>
        <h1> Reset Password </h1>
        <ForgotPasswordForm
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
  if (!values.email) {
    errors.email = "Please enter an email address";
  }
  return errors;
};

const mapStateToProps = state => ({
  alert: state.alert
});

export default reduxForm({
  validate,
  form: "ForgotPasswordForm"
})(
  connect(mapStateToProps, {
    forgotPassword,
    resetError
  })(ForgotPasswordFormContainer)
);

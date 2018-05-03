import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { logIn, resetError } from "../../actions/post_requests";
import { RESET_ERROR } from "../../actions/types";
import LogInForm from "./Login_form";

class LoginFormContainer extends Component {
  componentDidMount() {
    this.props.resetError();
  }

  handleFormSubmission = values => {
    this.props.logIn(values, res => {
      if (res.accountType === "Mentor") {
        this.props.history.push(`/${res.id}/mentor/dashboard`);
      } else if (res.accountType === "Mentee") {
        this.props.history.push(`/${res.id}/mentee/dashboard`);
      }
    });
  };
  render() {
    const { handleSubmit, error } = this.props;
    return (
      <div>
        <h1> Log in </h1>
        <LogInForm
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
  if (!values.email) {
    errors.email = "Please enter an email address";
  }
  if (!values.password) {
    errors.password = "Please enter a password";
  }
  return errors;
};

const mapStateToProps = state => ({
  error: state.error
});

export default reduxForm({
  validate,
  form: "LogInForm"
})(connect(mapStateToProps, { logIn, resetError })(LoginFormContainer));

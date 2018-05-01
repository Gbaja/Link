import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { reduxForm } from "redux-form";

import {
  signupMentor,
  resetError,
  signupMentee
} from "../../actions/post_requests";
import SignUpForm from "./SignUpForm";

class SignUpContainer extends Component {
  componentDidMount() {
    console.log("mount sign up form");
    this.props.resetError();
  }

  handleFormSubmission = values => {
    const signUpData = {
      firstName: values.firstName,
      lastName: values.lastName,
      accountType: values.accountType,
      email: values.email,
      password: values.password
    };
    if (values.accountType === "Mentor") {
      this.props.signupMentor(signUpData, res => {
        this.props.history.push(`/${res.id}/mentor/dashboard`);
      });
    } else if (values.accountType === "Mentee") {
      this.props.signupMentee(signUpData, res => {
        this.props.history.push(`/${res.id}/mentee/dashboard`);
      });
    }
  };
  render() {
    const { handleSubmit, error } = this.props;
    return (
      <div>
        <h1>Sign up</h1>
        <SignUpForm
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
  if (!values.firstName) {
    errors.firstName = "Enter your first name.";
  }
  if (!values.lastName) {
    errors.lastName = "Enter your last name.";
  }
  if (!values.accountType || values.accountType === "select") {
    errors.accountType = "Please select an account type.";
  }
  if (!values.email) {
    errors.email = "Enter your email.";
  }
  if (!values.password) {
    errors.password = "Enter a password.";
  }
  if (values.password !== values.confirmPassword) {
    errors.confirmPassword = "Passwords do not match.";
  }
  return errors;
};

const mapStateToProps = state => ({
  error: state.error
});

export default reduxForm({
  validate: validate,
  form: "SignUpForm"
})(
  connect(mapStateToProps, { signupMentor, resetError, signupMentee })(
    SignUpContainer
  )
);

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

import { checkPassword, checkEmail } from "../../helpers/forms_validations";

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
      universityName: values.universityName,
      email: values.email,
      password: values.password,
      confirmDetails: values.confirmDetails
    };
    if (values.accountType === "Mentor") {
      this.props.signupMentor(signUpData, res => {
        this.props.history.push(`/mentor/dashboard`);
      });
    } else if (values.accountType === "Mentee") {
      this.props.signupMentee(signUpData, res => {
        this.props.history.push(`/mentee/dashboard`);
      });
    }
  };
  render() {
    const { handleSubmit, alert } = this.props;
    return (
      <div>
        <h1>Sign up</h1>
        <SignUpForm
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
  if (!values.firstName) {
    errors.firstName = "Enter your first name.";
  }
  if (!values.lastName) {
    errors.lastName = "Enter your last name.";
  }
  if (!values.accountType || values.accountType === "select") {
    errors.accountType = "Please select an account type.";
  }
  if (!values.universityName || values.universityName === "select") {
    errors.universityName = "Please select a university name from the list.";
  }
  if (!values.email || !checkEmail(values.email)) {
    errors.email = "Enter a valid email.";
  }
  if (!values.password || !checkPassword(values.password)) {
    errors.password =
      "Password must include one uppercase letter, one number and a minimum of 6 characters. It cannot be empty.";
  }
  if (values.password !== values.confirmPassword) {
    errors.confirmPassword = "Passwords do not match.";
  }
  if (!values.confirmDetails) {
    errors.confirmDetails = "Please agree to the terms and conditions.";
  }
  return errors;
};

const mapStateToProps = state => ({
  alert: state.alert
});

export default reduxForm({
  validate: validate,
  form: "SignUpForm"
})(
  connect(mapStateToProps, { signupMentor, resetError, signupMentee })(
    SignUpContainer
  )
);

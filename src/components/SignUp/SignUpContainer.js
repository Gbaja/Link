import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { reduxForm } from "redux-form";

import {
  signupMentor,
  resetError,
  signupMentee
} from "../../actions/post_requests";
import { fetchUniversities } from "../../actions/get_requests";
import SignUpForm from "./SignUpForm";
import { SignupContainerDiv } from "./Signup.styled";

import { checkPassword, checkEmail } from "../../helpers/forms_validations";

class SignUpContainer extends Component {
  componentDidMount() {
    this.props.fetchUniversities();
  }

  componentWillUnmount() {
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
      confirmDetails: values.confirmDetails,
      status: "Pending"
    };
    this.props.signupMentor(signUpData);
    // this.props.signupMentor(signUpData, res => {
    //   if (res.accountType === "Mentor") {
    //     this.props.history.push(`/mentor/dashboard`);
    //   } else if (res.accountType === "Mentee") {
    //     this.props.history.push(`/mentee/dashboard`);
    //   }
    // });
  };

  render() {
    const { handleSubmit, alert, universities } = this.props;
    // if (universities.length === 0) {
    //   console.log("noo");
    //   return <div>Loading</div>;
    // } else {
    console.log("UNIVERSITIES: ", universities);
    return (
      <SignupContainerDiv>
        <SignUpForm
          onSubmit={this.handleFormSubmission}
          handleSubmit={handleSubmit}
          alert={alert}
          universities={universities}
        />
      </SignupContainerDiv>
    );
  }
  // }
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
  alert: state.alert,
  universities: state.universities
});

export default reduxForm({
  validate: validate,
  form: "SignUpForm"
})(
  connect(mapStateToProps, {
    signupMentor,
    resetError,
    signupMentee,
    fetchUniversities
  })(SignUpContainer)
);

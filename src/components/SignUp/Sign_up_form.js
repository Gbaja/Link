import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import {
  signupMentor,
  resetError,
  signupMentee
} from "../../actions/post_requests";

class SignUpForm extends Component {
  componentDidMount() {
    console.log("mount sign up form");
    this.props.resetError();
  }
  renderField(field) {
    const {
      meta: { touched, error }
    } = field;
    return (
      <div>
        {field.select ? (
          <div>
            <label>{field.label}</label>
            <select {...field.input}>
              {Object.keys(field.options).map(val => {
                return (
                  <option key={val} value={val}>
                    {field.options[val]}
                  </option>
                );
              })}
            </select>
            <p>{touched ? error : ""}</p>
          </div>
        ) : (
          <div>
            {" "}
            <label>{field.label}</label>
            <input type={field.type} {...field.input} />
            <p>{touched ? error : ""}</p>
          </div>
        )}
      </div>
    );
  }

  onSubmit = values => {
    console.log("hey");
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
    // this.props.signupMentor(signUpData, res => {
    //   console.log("SIGN UP RES: ", res);
    //   if (res.accountType === "Mentor") {
    //     this.props.history.push(`/${res.id}/mentor/dashboard`);
    //   } else if (res.accountType === "Mentee") {
    //     this.props.history.push(`/${res.id}/mentee/dashboard`);
    //   }
    // });
  };
  render() {
    const { handleSubmit, error } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <h3> Sign up </h3>
          {error && <p>{error}</p>}
          <Field
            label="First Name"
            name="firstName"
            type="text"
            component={this.renderField}
          />
          <Field
            label="Last Name"
            name="lastName"
            type="text"
            component={this.renderField}
          />
          <Field
            label="Account Type"
            name="accountType"
            component={this.renderField}
            select
            options={{
              select: "select your account type",
              Mentor: "Mentor",
              Mentee: "Mentee"
            }}
          />
          <Field label="Email" name="email" component={this.renderField} />
          <Field
            label="Password"
            name="password"
            type="password"
            component={this.renderField}
          />
          <Field
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            component={this.renderField}
          />
          <button type="submit">Sign up</button>
        </form>
        <div>
          <p>
            <Link to="/">Cancel</Link>
            Already have an account? <Link to="/login_form">Log in</Link>
          </p>
        </div>
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
    SignUpForm
  )
);

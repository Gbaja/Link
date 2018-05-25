import React, { Component } from "react";
import { Field } from "redux-form";

import { Link } from "react-router-dom";
import { renderFormFields } from "../../helpers/reduxFields";
import {
  SignupFormDiv,
  SignupH1,
  SignupLoginP,
  SignupLoginA
} from "./Signup.styled";
import Alert from "../Shared/Alert";
import { FormsSubmitButton } from "../Shared/Shared.styled";

class SignUpForm extends Component {
  render() {
    const { handleSubmit, onSubmit, alert, universities } = this.props;
    console.log("UNIVERSIRIES SGHKAH: ", universities);
    const changeUniToObj = universities => {
      const uniObj = universities.reduce((acc, curr) => {
        acc[curr] = curr;
        return acc;
      }, {});
      return uniObj;
    };
    const allUni = changeUniToObj(universities);
    return (
      <div>
        <SignupFormDiv>
          <SignupH1>Sign up</SignupH1>
          <form onSubmit={handleSubmit(onSubmit)}>
            {alert && <Alert alert={alert} />}
            <Field
              label="First Name"
              name="firstName"
              type="text"
              component={renderFormFields}
            />
            <Field
              label="Last Name"
              name="lastName"
              type="text"
              component={renderFormFields}
            />
            <Field
              label="Account Type"
              name="accountType"
              component={renderFormFields}
              select
              options={{
                select: "select your account type",
                Mentor: "Mentor",
                Mentee: "Mentee"
              }}
            />
            <Field
              label="University name"
              name="universityName"
              component={renderFormFields}
              select
              options={allUni}
            />
            <Field label="Email" name="email" component={renderFormFields} />
            <Field
              label="Password"
              name="password"
              type="password"
              component={renderFormFields}
            />
            <Field
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              component={renderFormFields}
            />
            <Field
              type="checkbox"
              label="I confirm that the information I have given are mine and accurate. I have ready the Privacy Policy and know how young & giving uses my data"
              name="confirmDetails"
              component={renderFormFields}
            />
            <FormsSubmitButton type="submit">Sign up</FormsSubmitButton>
          </form>
          <div>
            <SignupLoginP>
              Already have an account?{" "}
              <SignupLoginA to="/">Log in</SignupLoginA>
            </SignupLoginP>
          </div>
        </SignupFormDiv>
      </div>
    );
  }
}

export default SignUpForm;

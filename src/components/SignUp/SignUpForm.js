import React, { Component } from "react";
import { Field } from "redux-form";

import { Link } from "react-router-dom";
import { renderFormFields } from "../../helpers/reduxFields";

class SignUpForm extends Component {
  render() {
    const { handleSubmit, onSubmit, error } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {error && <p>{error}</p>}
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

export default SignUpForm;

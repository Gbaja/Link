import React, { Component } from "react";
import { Field } from "redux-form";

import { renderFormFields } from "../../helpers/reduxFields";
import Alert from "../Shared/Alert";
import Header from "../Shared/Header";

class ResetPasswordForm extends Component {
  render() {
    const { handleSubmit, onSubmit, alert } = this.props;
    return (
      <div>
        <Header />
        <h1> Change password </h1>
        {alert && <Alert alert={alert} />}
        <form onSubmit={handleSubmit(onSubmit)}>
          <Field
            label="Password"
            name="password"
            type="password"
            component={renderFormFields}
          />
          <Field
            label="Confirm password"
            name="confirmPassword"
            type="password"
            component={renderFormFields}
          />
          <button type="submit">Save</button>
        </form>
      </div>
    );
  }
}

export default ResetPasswordForm;

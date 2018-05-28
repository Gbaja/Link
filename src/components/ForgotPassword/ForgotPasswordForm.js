import React, { Component } from "react";
import { Field } from "redux-form";
import { Link } from "react-router-dom";

import { renderFormFields } from "../../helpers/reduxFields";
import Alert from "../Shared/Alert";

class ForgotPasswordForm extends Component {
  render() {
    const { handleSubmit, onSubmit, alert } = this.props;
    return (
      <div>
        <h1> Reset Password </h1>
        {alert && <Alert alert={alert} />}
        <form onSubmit={handleSubmit(onSubmit)}>
          <Field
            label="Email"
            name="email"
            type="email"
            component={renderFormFields}
          />
          <button type="submit">Reset</button>
          <Link to="/">Cancel</Link>
        </form>
      </div>
    );
  }
}

export default ForgotPasswordForm;

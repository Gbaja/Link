import React, { Component } from "react";
import { Field } from "redux-form";

import { renderFormFields } from "../../helpers/reduxFields";
import Alert from "../Shared/Alert";

class ResetPasswordForm extends Component {
  render() {
    const { handleSubmit, onSubmit, alert } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {alert && <Alert alert={alert} />}
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

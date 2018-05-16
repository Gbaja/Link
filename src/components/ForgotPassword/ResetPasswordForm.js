import React, { Component } from "react";
import { Field } from "redux-form";

import { renderFormFields } from "../../helpers/reduxFields";

class ResetPasswordForm extends Component {
  render() {
    const { handleSubmit, onSubmit, alert } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {alert && <p>{alert}</p>}
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

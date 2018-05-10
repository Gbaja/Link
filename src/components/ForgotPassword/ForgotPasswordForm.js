import React, { Component } from "react";
import { Field } from "redux-form";
import { Link } from "react-router-dom";

import { renderFormFields } from "../../helpers/reduxFields";

class ForgotPasswordForm extends Component {
  render() {
    const { handleSubmit, onSubmit, error } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {error && <p>{error}</p>}
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

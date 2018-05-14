import React, { Component } from "react";
import { Field } from "redux-form";
import { Link } from "react-router-dom";

import { renderFormFields } from "../../helpers/reduxFields";

class LogInForm extends Component {
  render() {
    const { handleSubmit, onSubmit, alert } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {alert && <p>{alert}</p>}
          <Field label="Email" name="email" component={renderFormFields} />
          <Field
            label="Password"
            name="password"
            type="password"
            component={renderFormFields}
          />
          <button type="submit">Log in</button>
          <Link to="/">Cancel</Link>
        </form>
        <div>
          <p>
            New to Young & Giving? <Link to="/signup_form">Sign up</Link>
          </p>
          <p>
            Forgot your password? <Link to="/forgot_password">Reset here</Link>
          </p>
        </div>
      </div>
    );
  }
}

export default LogInForm;

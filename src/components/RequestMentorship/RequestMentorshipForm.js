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
          <Field
            label="Message"
            name="message"
            textarea
            component={renderFormFields}
          />
          <button type="submit">Request</button>
        </form>
      </div>
    );
  }
}

export default LogInForm;

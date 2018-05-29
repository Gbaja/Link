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
          <p> What you need help with?</p>
          <Field
            label="Resume or cover letter tips and review"
            name="cv"
            component={renderFormFields}
            type="checkbox"
          />
          <Field
            label="Job shadow opportunities"
            name="shadow"
            component={renderFormFields}
            type="checkbox"
          />
          <Field
            label="Mock interviews"
            name="interview"
            component={renderFormFields}
            type="checkbox"
          />
          <Field
            label="Post job and internships"
            name="job"
            component={renderFormFields}
            type="checkbox"
          />
          <Field
            label="Post Graduate Application"
            name="postgrad"
            component={renderFormFields}
            type="checkbox"
          />
          <Field
            label="Professional and career exploration"
            name="career"
            component={renderFormFields}
            type="checkbox"
          />
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

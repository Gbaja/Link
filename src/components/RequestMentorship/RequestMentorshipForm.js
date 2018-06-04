import React, { Component } from "react";
import { Field } from "redux-form";
import { Link } from "react-router-dom";

import { renderFormFields } from "../../helpers/reduxFields";
import {
  FormsSubmitButton,
  ContainerDiv,
  HeadingH1
} from "../Shared/Shared.styled";

class LogInForm extends Component {
  render() {
    const { handleSubmit, onSubmit } = this.props;
    return (
      <ContainerDiv>
        <HeadingH1>Mentorship Request Form </HeadingH1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2> What you need help with?</h2>
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
            name="requestMessage"
            textarea
            component={renderFormFields}
          />
          <FormsSubmitButton type="submit">Request</FormsSubmitButton>
        </form>
      </ContainerDiv>
    );
  }
}

export default LogInForm;

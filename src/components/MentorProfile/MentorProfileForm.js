import React, { Component } from "react";
import { Field, reduxForm, initialize } from "redux-form";
import { connect } from "react-redux";

import { updateProfile } from "../../actions/put_requests";
import { renderFormFields } from "../../helpers/reduxFields";
import { textareaWordCountCheck } from "../../helpers/forms_validations";

class MentorProfileForm extends Component {
  render() {
    const { handleSubmit, onSubmit, auth } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <p>Email: {auth.email}</p>
          <p>Account type: {auth.accountType}</p>
          <Field
            label="First name"
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
            label="Current Role"
            name="currentRole"
            component={renderFormFields}
          />
          <Field
            label="currentCompany"
            name="currentCompany"
            type="text"
            component={renderFormFields}
          />
          <Field
            label="Current Location"
            name="location"
            component={renderFormFields}
            select
            options={{
              Select: "Select",
              UK: "United-Kingdom",
              Nigeria: "Nigeria"
            }}
          />
          <Field
            label="Age"
            name="age"
            component={renderFormFields}
            select
            options={{
              "Select-age": "Select age",
              "18 - 21": "18 - 21",
              "22 - 26": "22 - 26",
              "27 - 32": "27 - 32",
              "33- 40": "33- 40",
              "41+": "41+"
            }}
          />
          <Field
            label="Short biography"
            name="biography"
            textarea
            component={renderFormFields}
            validate={textareaWordCountCheck}
          />
          <Field
            label="What are your motivations for mentoring?"
            name="motivation"
            textarea
            component={renderFormFields}
            validate={textareaWordCountCheck}
          />
          <Field
            label="What can you help a mentee with?"
            name="offer"
            textarea
            component={renderFormFields}
            validate={textareaWordCountCheck}
          />
          <button type="submit">Update profile</button>
        </form>
      </div>
    );
  }
}

export default MentorProfileForm;

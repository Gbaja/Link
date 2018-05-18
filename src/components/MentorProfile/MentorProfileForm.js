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
            label="Age"
            name="age"
            component={renderFormFields}
            select
            options={{
              "": "",
              "Rather not say": "Rather not say",
              "18 - 21": "18 - 21",
              "22 - 26": "22 - 26",
              "27 - 32": "27 - 32",
              "33- 40": "33- 40",
              "41+": "41+"
            }}
          />
          <Field
            label="LinkedIn or professional social media account url"
            name="socialMediaUrl"
            type="url"
            component={renderFormFields}
          />
          <Field
            label="Unversity attended"
            name="universityName"
            component={renderFormFields}
            select
            options={{
              select: "select university",
              "Durham University": "Durham University",
              LSE: "LSE",
              "Kings College London": "Kings College London"
            }}
          />
          <Field
            label="What degree did you do?"
            name="degree"
            type="text"
            component={renderFormFields}
          />
          <Field
            label="What industry do you currently work in?"
            name="currentIndustry"
            component={renderFormFields}
            select
            options={{
              "": "",
              "Not disclosed": "Not disclosed",
              "Banking&Finance": "Banking&Finance",
              Technology: "Technology",
              "Digital Media": "Digital Media"
            }}
          />
          <Field
            label="Job title"
            name="currentRole"
            component={renderFormFields}
          />
          <Field
            label="Current Company"
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
              "": "",
              None: "None",
              UK: "United-Kingdom",
              Nigeria: "Nigeria"
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
          <Field
            label="Availability"
            name="availability"
            component={renderFormFields}
            select
            options={{
              "": "",
              "Available to mentor": "Available to mentor",
              "Unavailable to mentor": "Unavailable to mentor"
            }}
          />
          <button type="submit">Update profile</button>
        </form>
      </div>
    );
  }
}

export default MentorProfileForm;

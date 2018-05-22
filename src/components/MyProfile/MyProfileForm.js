import React, { Component } from "react";
import { Field, reduxForm, initialize } from "redux-form";
import { connect } from "react-redux";

import { renderFormFields, renderFileInput } from "../../helpers/reduxFields";
import { textareaWordCountCheck } from "../../helpers/forms_validations";

class MyProfileForm extends Component {
  render() {
    const { handleSubmit, onSubmit, auth } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <p>{auth.email}</p>
          <p>{auth.accountType}</p>
          <p>{auth.university}</p>
          <Field
            label="Picture"
            name="imageUrl"
            type="file"
            component={renderFileInput}
          />
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
            label="Gender"
            name="gender"
            component={renderFormFields}
            select
            options={{
              "": "",
              Male: "Male",
              Female: "Female",
              "Rather not say": "Rather not say"
            }}
          />
          <Field
            label="Ethnicity"
            name="ethnicity"
            type="text"
            component={renderFormFields}
          />
          <Field
            label="Name of university"
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
            label="Name of degree"
            name="degree"
            type="text"
            component={renderFormFields}
          />
          <Field
            label="Graduation year"
            name="graduationYear"
            type="month"
            component={renderFormFields}
          />
          <Field
            label="Job title"
            name="jobTitle"
            type="text"
            component={renderFormFields}
          />
          <Field
            label="Company"
            name="company"
            type="text"
            component={renderFormFields}
          />
          <Field
            label="Date started"
            name="dateStarted"
            type="month"
            component={renderFormFields}
          />
          <Field
            label="Industry"
            name="industry"
            type="text"
            component={renderFormFields}
          />
          <Field
            label="LinkedIn or professional social media account url"
            name="socialMediaUrl"
            type="url"
            component={renderFormFields}
          />
          <Field
            label="Short biography"
            name="biography"
            textarea
            component={renderFormFields}
            validate={textareaWordCountCheck}
          />
          <Field
            label="Why do you want a mentor?"
            name="reason"
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
              "Looking for a mentor": "Looking for a mentor",
              "Not currently looking for to mentor":
                "Not currently looking for to mentor"
            }}
          />
          <button type="submit">Update profile</button>
        </form>
      </div>
    );
  }
}

export default MyProfileForm;

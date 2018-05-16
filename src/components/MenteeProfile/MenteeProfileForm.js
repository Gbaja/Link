import React, { Component } from "react";
import { Field, reduxForm, initialize } from "redux-form";
import { connect } from "react-redux";

import { renderFormFields } from "../../helpers/reduxFields";
import { textareaWordCountCheck } from "../../helpers/forms_validations";

class MenteeProfileForm extends Component {
  render() {
    const { handleSubmit, onSubmit, auth } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <p>{auth.email}</p>
          <p>{auth.accountType}</p>
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
              "18": 18,
              "19": 19,
              "20": 20,
              "21": 21,
              "22": 22,
              "": "",
              "Rather not say": "Rather not say"
            }}
          />
          <Field
            label="LinkedIn or professional social media account url"
            name="socialMediaUrl"
            type="url"
            component={renderFormFields}
          />
          <Field
            label="Current Location"
            name="location"
            component={renderFormFields}
            select
            options={{
              None: "None",
              UK: "United-Kingdom",
              Nigeria: "Nigeria"
            }}
          />
          <Field
            label="Name of university"
            name="universityName"
            type="text"
            component={renderFormFields}
          />
          <Field
            label="Name of degree"
            name="degree"
            type="text"
            component={renderFormFields}
          />
          <Field
            label="Current Motive"
            name="currentMotive"
            type="text"
            component={renderFormFields}
          />
          <Field
            label="What industry would you like a mentor from?"
            name="mentorIndustry"
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
            name="status"
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

export default MenteeProfileForm;

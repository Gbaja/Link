import React, { Component } from "react";
import { Field, reduxForm, initialize } from "redux-form";
import { connect } from "react-redux";

import { renderFormFields } from "../../helpers/reduxFields";

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
            label="Current Location"
            name="baseArea"
            component={renderFormFields}
          />
          <Field
            label="Current Motive"
            name="currentMotive"
            type="text"
            component={renderFormFields}
          />
          <Field
            label="Age"
            name="age"
            component={renderFormFields}
            select
            options={{
              "18": "18",
              "19": "19",
              "20": "20",
              "21": "21",
              "22": "22"
            }}
          />
          <Field
            label="Short biography"
            name="biography"
            textarea
            component={renderFormFields}
          />
          <Field
            label="Why do you want a mentor?"
            name="reason"
            textarea
            component={renderFormFields}
          />
          <Field
            label="What industry would you like a mentor from?"
            name="mentorIndustry"
            textarea
            component={renderFormFields}
          />
          <button type="submit">Update profile</button>
        </form>
      </div>
    );
  }
}

export default MenteeProfileForm;

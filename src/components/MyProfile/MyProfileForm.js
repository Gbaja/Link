import React, { Component } from "react";
import { Field } from "redux-form";

import { renderFormFields, renderFileInput } from "../../helpers/reduxFields";
import { textareaWordCountCheck } from "../../helpers/forms_validations";
import {
  ContainerDiv,
  SubContainerDiv,
  ProfileTextP,
  ButtonLink
} from "./MyProfile.styled";
import { FormsSubmitButton } from "../Shared/Shared.styled";
import Loading from "../Shared/Loading";

class MyProfileForm extends Component {
  render() {
    const { handleSubmit, onSubmit, auth, loading } = this.props;
    return (
      <ContainerDiv>
        <SubContainerDiv>
          <h3> Update Profile </h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <ProfileTextP>Email: {auth.email}</ProfileTextP>
            <ProfileTextP>Account type: {auth.accountType}</ProfileTextP>
            <ProfileTextP>University: {auth.universityName}</ProfileTextP>
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
              name="industry"
              component={renderFormFields}
              select
              options={{
                select: "select industry",
                "Not disclosed": "Not disclosed",
                "Banking&Finance": "Banking&Finance",
                Technology: "Technology",
                "Digital Media": "Digital Media"
              }}
            />
            <Field
              label="LinkedIn or professional social media account url"
              name="socialMediaUrl"
              type="url"
              component={renderFormFields}
            />
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
                "I am available": "I am available",
                "Currently unavailable": "Currently unavailable"
              }}
            />
            {loading ? <Loading /> : ""}
            <FormsSubmitButton type="submit">Update profile</FormsSubmitButton>
            <FormsSubmitButton>
              <ButtonLink to="/mentee/my_profile">Cancel</ButtonLink>
            </FormsSubmitButton>
          </form>
        </SubContainerDiv>
      </ContainerDiv>
    );
  }
}

export default MyProfileForm;

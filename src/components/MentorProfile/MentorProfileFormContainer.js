import React, { Component } from "react";
import { Field, reduxForm, initialize } from "redux-form";
import { connect } from "react-redux";

import { updateProfile } from "../../actions/put_requests";
import MentorProfileForm from "./MentorProfileForm";

class MentorProfileFormContainer extends Component {
  constructor(props) {
    super(props);
    this.props.dispatch(
      initialize("MentorProfileForm", this.props.initialValues)
    );
  }

  onSubmit = values => {
    this.props.updateProfile(values, `/api/updateMentorProfile`, res => {
      this.props.history.push(`/mentor/my_profile`);
    });
  };
  xd;
  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <h3> Update Profile</h3>
        <MentorProfileForm
          onSubmit={this.onSubmit}
          handleSubmit={handleSubmit}
          auth={this.props.auth}
        />
      </div>
    );
  }
}
const validate = values => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = "All mentors must have a first name.";
  }
  if (!values.lastName) {
    errors.lastName = "All mentors must have a last name.";
  }
  if (values.location === "Select") {
    errors.location = "Please select your location.";
  }
  return errors;
};
const mapStateToProps = ({ auth }) => ({
  initialValues: {
    ...auth
  },
  auth
});
export default reduxForm({
  validate: validate,
  form: "MentorProfileForm"
})(connect(mapStateToProps, { updateProfile })(MentorProfileFormContainer));

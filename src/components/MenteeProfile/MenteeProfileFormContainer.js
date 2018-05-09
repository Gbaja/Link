import React, { Component } from "react";
import { Field, reduxForm, initialize } from "redux-form";
import { connect } from "react-redux";
import { updateProfile } from "../../actions/put_requests";

import MenteeProfileForm from "./MenteeProfileForm";

class MenteeProfileFormContainer extends Component {
  constructor(props) {
    super(props);
    this.props.dispatch(
      initialize("MenteeProfileForm", this.props.initialValues)
    );
  }

  onSubmit = values => {
    this.props.updateProfile(values, `/api/updateMenteeProfile`, res => {
      this.props.history.push(`/${res.id}/mentee/my_profile`);
    });
  };
  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <h3> Update Profile </h3>
        <MenteeProfileForm
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
  form: "MenteeProfileForm"
})(
  connect(mapStateToProps, {
    updateProfile
  })(MenteeProfileFormContainer)
);

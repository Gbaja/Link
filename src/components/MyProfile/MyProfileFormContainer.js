import React, { Component } from "react";
import { Field, reduxForm, initialize } from "redux-form";
import { connect } from "react-redux";
import { updateProfile } from "../../actions/put_requests";
import MyProfileForm from "./MyProfileForm";

class MyProfileFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
    this.props.dispatch(initialize("MyProfileForm", this.props.initialValues));
  }

  onSubmit = values => {
    console.log("VALUES: ", values);
    this.setState({ loading: true });
    this.props.updateProfile(values).then(res => {
      this.props.history.push(`/mentee/my_profile`);
    });
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <MyProfileForm
          onSubmit={this.onSubmit}
          handleSubmit={handleSubmit}
          auth={this.props.auth}
          loading={this.state.loading}
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
  form: "MyProfileForm"
})(
  connect(
    mapStateToProps,
    {
      updateProfile
    }
  )(MyProfileFormContainer)
);

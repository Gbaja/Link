import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";

import NewUniversityForm from "./NewUniversityForm";
import { resetError } from "../../actions/post_requests";
class NewUniversityFormContainer extends Component {
  componentDidMount() {
    this.props.resetError();
  }
  handleFormSubmission = values => {
    //   this.props.addUniversity(values)
    console.log(values);
  };
  render() {
    const { handleSubmit, alert } = this.props;

    return (
      <div>
        <NewUniversityForm
          onSubmit={this.handleFormSubmission}
          handleSubmit={handleSubmit}
        />
      </div>
    );
  }
}

const validate = values => {
  const errors = {};
  if (!values.name) {
    errors.name = "Enter a university name";
  }
  if (!values.email) {
    errors.email = "Please enter a university name";
  }
  return errors;
};

const mapStateToProps = state => ({
  alert: state.alert
});
export default reduxForm({
  validate: validate,
  form: "NewUniversityForm"
})(connect(mapStateToProps, { resetError })(NewUniversityFormContainer));

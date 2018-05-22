import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

import { resetError } from "../../actions/post_requests";
import { RESET_ERROR } from "../../actions/types";
import RequestMentorshipForm from "./RequestMentorshipForm";

class RequestMentorshipFormContainer extends Component {
  componentDidMount() {
    this.props.resetError();
  }

  handleFormSubmission = values => {
    console.log("Request form values: ", values);
  };
  render() {
    const { handleSubmit, alert } = this.props;
    return (
      <div>
        <h1>Mentorship Request Form </h1>
        <RequestMentorshipForm
          onSubmit={this.handleFormSubmission}
          handleSubmit={handleSubmit}
          alert={alert}
        />
      </div>
    );
  }
}
const validate = values => {
  const errors = {};
  return errors;
};

const mapStateToProps = state => ({
  alert: state.alert
});

export default reduxForm({
  validate,
  form: "RequestForm"
})(
  withRouter(
    connect(mapStateToProps, { resetError })(RequestMentorshipFormContainer)
  )
);

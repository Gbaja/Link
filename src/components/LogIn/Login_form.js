import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { logIn } from "../../actions/post_requests";
import { RESET_ERROR } from "../../actions/types";

class LogInForm extends Component {
  componentDidMount() {
    return dispatch => {
      dispatch({
        type: RESET_ERROR,
        payload: ""
      });
    };
  }
  renderField(field) {
    return (
      <div>
        <label>{field.label}</label>
        <input type={field.type} {...field.input} />
      </div>
    );
  }

  onSubmit = values => {
    console.log(values);
    this.props.logIn(values, res => {
      console.log("RES: ", res);
      if (res.accountType === "Mentor") {
        this.props.history.push(`/${res.id}/mentor/dashboard`);
      } else if (res.accountType === "Mentee") {
        this.props.history.push(`/${res.id}/mentee/dashboard`);
      }
    });
  };
  render() {
    const { handleSubmit, error } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <h3> Log in </h3>
          {error && <p>{error}</p>}
          <Field label="Email" name="email" component={this.renderField} />
          <Field
            label="Password"
            name="password"
            type="password"
            component={this.renderField}
          />
          <button type="submit">Sign up</button>
          <Link to="/">Cancel</Link>
        </form>
        <div>
          <p>
            New to Young & Giving? <Link to="/signup_form">Sign up</Link>
          </p>
        </div>
      </div>
    );
  }
}
const validate = values => {
  const errors = {};
  if (!values.email) {
    errors.email = "Please enter an email address";
  }
  if (!values.password) {
    errors.password = "Please enter a password";
  }
  return errors;
};

const mapStateToProps = state => ({
  error: state.error
});

export default reduxForm({
  validate,
  form: "LogInForm"
})(connect(mapStateToProps, { logIn })(LogInForm));

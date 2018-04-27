import React, { Component } from "react";
import { Field } from "redux-form";
import { Link } from "react-router-dom";

class LogInForm extends Component {
  renderField(field) {
    return (
      <div>
        <label>{field.label}</label>
        <input type={field.type} {...field.input} />
      </div>
    );
  }

  render() {
    const { handleSubmit, onSubmit, error } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
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

export default LogInForm;

import React, { Component } from "react";
import { Field, reduxForm, initialize } from "redux-form";
import { connect } from "react-redux";
import { updateProfile } from "../../actions/put_requests";

class MentorProfileForm extends Component {
  renderField(field) {
    return (
      <div>
        {field.select ? (
          <div>
            <label>{field.label}</label>
            <select {...field.input}>
              {Object.keys(field.options).map(val => {
                return (
                  <option key={val} value={val}>
                    {field.options[val]}
                  </option>
                );
              })}
            </select>
          </div>
        ) : field.textarea ? (
          <div>
            <label>{field.label}</label>
            <textarea {...field.input} />
          </div>
        ) : (
          <div>
            <label>{field.label}</label>
            <input type={field.type} {...field.input} />
          </div>
        )}
      </div>
    );
  }

  render() {
    const { handleSubmit, onSubmit, auth } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <p>Email: {auth.email}</p>
          <p>Account type: {auth.accountType}</p>
          <Field
            label="First name"
            name="firstName"
            type="text"
            component={this.renderField}
          />
          <Field
            label="Last Name"
            name="lastName"
            type="text"
            component={this.renderField}
          />

          <Field
            label="Current Role"
            name="currentRole"
            component={this.renderField}
          />
          <Field
            label="currentCompany"
            name="currentCompany"
            type="text"
            component={this.renderField}
          />
          <Field
            label="Age"
            name="age"
            component={this.renderField}
            select
            options={{
              "18 - 21": "18 - 21",
              "22 - 26": "22 - 26",
              "27 - 32": "27 - 32",
              "33- 40": "33- 40",
              "41+": "41+"
            }}
          />
          <Field
            label="Short biography"
            name="biography"
            textarea
            component={this.renderField}
          />
          <Field
            label="What are your motivations for mentoring?"
            name="motivation"
            textarea
            component={this.renderField}
          />
          <Field
            label="What can you help a mentee with?"
            name="offer"
            textarea
            component={this.renderField}
          />
          <button type="submit">Update profile</button>
        </form>
      </div>
    );
  }
}

export default MentorProfileForm;

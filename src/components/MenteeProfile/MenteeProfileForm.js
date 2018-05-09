import React, { Component } from "react";
import { Field, reduxForm, initialize } from "redux-form";
import { connect } from "react-redux";
import { updateProfile } from "../../actions/put_requests";

class MenteeProfileForm extends Component {
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
          <p>{auth.email}</p>
          <p>{auth.accountType}</p>
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
            label="Current Location"
            name="baseArea"
            component={this.renderField}
          />
          <Field
            label="Current Motive"
            name="currentMotive"
            type="text"
            component={this.renderField}
          />
          <Field
            label="Age"
            name="age"
            component={this.renderField}
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
            component={this.renderField}
          />
          <Field
            label="Why do you want a mentor?"
            name="reason"
            textarea
            component={this.renderField}
          />
          <Field
            label="What industry would you like a mentor from?"
            name="mentorIndustry"
            textarea
            component={this.renderField}
          />
          <button type="submit">Update profile</button>
        </form>
      </div>
    );
  }
}

export default MenteeProfileForm;

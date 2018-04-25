import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

class MyProfileForm extends Component {
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
            <textarea />
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
  onSubmit = values => {
    console.log(values);
  };
  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <h3> Update Profile </h3>
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
            label="Account Type"
            name="accountType"
            component={this.renderField}
            select
            options={{
              mentor: "Mentor",
              mentee: "Mentee"
            }}
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
              bracket1: "18 - 21",
              bracket2: "22 - 26",
              bracket3: "27 - 32",
              bracket4: "33- 40",
              bracket5: "41+"
            }}
          />
          <Field
            label="Short biography"
            name="biography"
            textarea
            component={this.renderField}
          />
          <p> What professional skills could you help mentee develop?</p>
          <Field
            label="Career planning"
            name="careerPlanning"
            type="checkbox"
            component={this.renderField}
          />
          <Field
            label="CV writing and tips"
            name="cv"
            type="checkbox"
            component={this.renderField}
          />
          <Field
            label="Job search and interview skills"
            name="jobsAndInterview"
            type="checkbox"
            component={this.renderField}
          />
          <p> Please indicate your motivations for mentoring</p>
          <Field
            label="To develop my professional and personal skills"
            name="developSkills"
            type="checkbox"
            component={this.renderField}
          />
          <Field
            label="To gain a better understanding of young people in my community"
            name="understandingYoungPeople"
            type="checkbox"
            component={this.renderField}
          />
          <Field
            label="It is a rewarding experience"
            name="rewarding"
            type="checkbox"
            component={this.renderField}
          />
          <button type="submit">Update profile</button>
        </form>
      </div>
    );
  }
}
// const validate = values => {
//   const errors = {};
//   if (!values.firstName) {
//     errors.firstName = "Enter your first name!";
//   }
//   if (!values.lastName) {
//     errors.lastName = "Enter some last name";
//   }
//   if (!values.email) {
//     errors.email = "Enter some email.";
//   }
//   if (!values.password) {
//     errors.email = "Enter some email.";
//   }
//   return errors;
// };

export default reduxForm({
  //validate: validate,
  form: "MyProfileForm"
})(connect(null, {})(MyProfileForm));

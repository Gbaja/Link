import React, { Component } from "react";
import { Field, reduxForm, initialize } from "redux-form";
import { connect } from "react-redux";
import { updateProfile } from "../../actions/put_requests";

class MyProfileForm extends Component {
  constructor(props) {
    super(props);
    this.props.dispatch(initialize("MyProfileForm", this.props.initialValues));
  }

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
  onSubmit = values => {
    this.props.updateProfile(values, `/api/updateMentorProfile`, res => {
      this.props.history.push(`/${res.id}/mentor/my_profile`);
    });
  };
  xd;
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
const mapStateToProps = ({ auth }) => ({
  initialValues: {
    ...auth
  }
});
export default reduxForm({
  //validate: validate,
  form: "MyProfileForm"
})(connect(mapStateToProps, { updateProfile })(MyProfileForm));

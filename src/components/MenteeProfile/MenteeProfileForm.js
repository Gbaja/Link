import React, { Component } from "react";
import { Field, reduxForm, initialize } from "redux-form";
import { connect } from "react-redux";
import { updateMentee } from "../../actions/put_requests";

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
    this.props.updateMentee(values, res => {
      this.props.history.push(`/${res.id}/mentee/my_profile`);
    });
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
})(
  connect(mapStateToProps, {
    updateMentee
  })(MyProfileForm)
);

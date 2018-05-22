import React, { Component } from "react";
import { Field } from "redux-form";
import { Link } from "react-router-dom";

import { renderFormFields } from "../../helpers/reduxFields";
import Alert from "../Shared/Alert";
import { FormsSubmitButton } from "../Shared/Shared.styled";

class NewUniversityForm extends Component {
  render() {
    const { handleSubmit, onSubmit, alert } = this.props;
    return (
      <div>
        <div>
          <h1>New University Form</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            {alert && <Alert alert={alert} />}
            <Field
              label="UniversityName"
              name="name"
              type="text"
              component={renderFormFields}
            />
            <Field
              label="email"
              name="email"
              type="text"
              component={renderFormFields}
            />
            <FormsSubmitButton type="submit">Add</FormsSubmitButton>
          </form>
        </div>
      </div>
    );
  }
}

export default NewUniversityForm;

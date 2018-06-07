import React, { Component } from "react";
import { Field } from "redux-form";

import { renderFormFields } from "../../helpers/reduxFields";
import Alert from "../Shared/Alert";
import Header from "../Shared/Header";
import { FormsSubmitButton, ContainerDiv } from "../Shared/Shared.styled";

class ResetPasswordForm extends Component {
  render() {
    const { handleSubmit, onSubmit, alert } = this.props;
    return (
      <div>
        <Header />
        <ContainerDiv>
          <h1> Change password </h1>
          {alert && <Alert alert={alert} />}
          <form onSubmit={handleSubmit(onSubmit)}>
            <Field
              label="Password"
              name="password"
              type="password"
              component={renderFormFields}
            />
            <Field
              label="Confirm password"
              name="confirmPassword"
              type="password"
              component={renderFormFields}
            />
            <FormsSubmitButton type="submit">Reset</FormsSubmitButton>
          </form>
        </ContainerDiv>
      </div>
    );
  }
}

export default ResetPasswordForm;

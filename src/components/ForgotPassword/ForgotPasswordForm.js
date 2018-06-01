import React, { Component } from "react";
import { Field } from "redux-form";
import { Link } from "react-router-dom";

import { renderFormFields } from "../../helpers/reduxFields";
import Alert from "../Shared/Alert";
import Header from "../Shared/Header";
import {
  FormsSubmitButton,
  ContainerDiv,
  HeadingH1
} from "../Shared/Shared.styled";

class ForgotPasswordForm extends Component {
  render() {
    const { handleSubmit, onSubmit, alert } = this.props;
    return (
      <div>
        <Header />
        <ContainerDiv>
          <HeadingH1> Reset Password </HeadingH1>
          {alert && <Alert alert={alert} />}
          <form onSubmit={handleSubmit(onSubmit)}>
            <Field
              label="Email"
              name="email"
              type="email"
              component={renderFormFields}
            />
            <FormsSubmitButton type="submit">Reset</FormsSubmitButton>
            <FormsSubmitButton>
              <Link to="/">Cancel</Link>
            </FormsSubmitButton>
          </form>
        </ContainerDiv>
      </div>
    );
  }
}

export default ForgotPasswordForm;

import React, { Component } from "react";
import { Field } from "redux-form";

import { renderFormFields } from "../../helpers/reduxFields";
import Alert from "../Shared/Alert";
import {
  FormsSubmitButton,
  ContainerDiv,
  HeadingH1,
  Links
} from "../Shared/Shared.styled";
import Header from "../Shared/Header";

class NewUniversityForm extends Component {
  render() {
    const { handleSubmit, onSubmit, alert } = this.props;
    return (
      <div>
        <div>
          <Header />
          <FormsSubmitButton>
            <Links to="/owner">Back to dashboard</Links>
          </FormsSubmitButton>
          <ContainerDiv>
            <HeadingH1>New University Form</HeadingH1>
            <form onSubmit={handleSubmit(onSubmit)}>
              {alert && <Alert alert={alert} />}
              <Field
                label="University Name"
                name="universityName"
                type="text"
                component={renderFormFields}
              />
              <Field
                label="Email"
                name="email"
                type="text"
                component={renderFormFields}
              />
              <FormsSubmitButton type="submit">Add</FormsSubmitButton>
            </form>
          </ContainerDiv>
        </div>
      </div>
    );
  }
}

export default NewUniversityForm;

import React, { Component } from "react";
import { Field } from "redux-form";

import { renderFormFields } from "../../helpers/reduxFields";
import { FormsSubmitButton } from "../Shared/Shared.styled";
import { SearchFormContainerDiv } from "./SearchForm.styled";

class SearchForm extends Component {
  render() {
    const { handleSubmit, onSubmit, alert } = this.props;
    return (
      <SearchFormContainerDiv>
        <form onSubmit={handleSubmit(onSubmit)}>
          {alert && <p>{alert}</p>}
          <h3> Search </h3>
          <Field
            name="name"
            type="text"
            component={renderFormFields}
            placeholder="Search by name"
          />
          <Field
            name="location"
            component={renderFormFields}
            select
            options={{
              select: "select location",
              UK: "United Kingdom",
              Nigeria: "Nigeria"
            }}
          />
          <Field
            name="industry"
            component={renderFormFields}
            select
            options={{
              select: "select industry",
              "Not disclosed": "Not disclosed",
              "Banking&Finance": "Banking&Finance",
              Technology: "Technology",
              "Digital Media": "Digital Media"
            }}
          />
          <FormsSubmitButton type="submit">Search</FormsSubmitButton>
        </form>
        <FormsSubmitButton onClick={this.props.fetchData()}>
          View all
        </FormsSubmitButton>
      </SearchFormContainerDiv>
    );
  }
}

export default SearchForm;

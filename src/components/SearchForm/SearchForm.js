import React, { Component } from "react";
import { Field } from "redux-form";

import { renderFormFields } from "../../helpers/reduxFields";

class SearchForm extends Component {
  render() {
    const { handleSubmit, onSubmit, alert } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {alert && <p>{alert}</p>}
          <Field
            placeholder="Search by name"
            name="name"
            type="text"
            component={renderFormFields}
          />
          <Field
            name="location"
            component={renderFormFields}
            select
            options={{
              select: "select location",
              "United Kingdom": "United Kingdom",
              Nigeria: "Nigeria"
            }}
          />
          <Field
            name="universityName"
            component={renderFormFields}
            select
            options={{
              select: "select university",
              "Durham University": "Durham University",
              LSE: "LSE",
              "Kings College London": "Kings College London"
            }}
          />
          <Field
            name="mentorIndustry"
            component={renderFormFields}
            select
            options={{
              "": "",
              "Not disclosed": "Not disclosed",
              "Banking&Finance": "Banking&Finance",
              Technology: "Technology",
              "Digital Media": "Digital Media"
            }}
          />
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}

export default SearchForm;

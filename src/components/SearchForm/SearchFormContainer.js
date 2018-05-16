import React, { Component } from "react";
import { Field, reduxForm, initialize } from "redux-form";
import { connect } from "react-redux";

import SearchForm from "./SearchForm";

class SearchFormContainer extends Component {
  onSubmit = values => {
    console.log(values);
  };
  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <h3> Search </h3>
        <SearchForm onSubmit={this.onSubmit} handleSubmit={handleSubmit} />
      </div>
    );
  }
}
const validate = values => {
  const errors = {};

  return errors;
};

export default reduxForm({
  validate: validate,
  form: "SearchForm"
})(connect(null, null)(SearchFormContainer));

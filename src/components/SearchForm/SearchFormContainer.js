import React, { Component } from "react";
import { Field, reduxForm, initialize } from "redux-form";
import { connect } from "react-redux";

import SearchForm from "./SearchForm";

class SearchFormContainer extends Component {
  onSubmit = values => {
    if (values.location === "select" || values.industry === "select") {
      values.location = "";
      values.industry = "";
    }
    this.props.setFilter(values);
  };

  render() {
    console.log(this.props);
    const { handleSubmit } = this.props;
    return (
      <div>
        <SearchForm
          onSubmit={this.onSubmit}
          handleSubmit={handleSubmit}
          fetchData={() => () => this.props.fetchData()}
        />
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
})(SearchFormContainer);

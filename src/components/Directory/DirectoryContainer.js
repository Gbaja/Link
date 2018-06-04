import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { fetchDirectory } from "../../actions/get_requests";
import SearchFormContainer from "../SearchForm/SearchFormContainer";
import Directory from "./Directory";
import Header from "../Shared/Header";

class DirectoryContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0,
      numberOfPages: [],
      filter: {}
    };
  }

  componentDidMount() {
    console.log("NAME: ", this.props.filter.name);
    this.props
      .fetchDirectory(
        1,
        this.props.match.params.type,
        this.props.auth.universityName,
        this.state.filter.name,
        this.state.filter.location,
        this.state.filter.industry
      )
      .then(data => {
        this.setPageNumbers(this.props.directory.count);
      });
  }

  setPageNumbers = number => {
    let total = Math.ceil(number / 1);
    let arr = [];
    while (total > 0) {
      arr.unshift(total--);
    }
    this.setState({ numberOfPages: arr });
  };

  showPage = pageNum => () => {
    console.log(this.state.filter.location);
    this.props.fetchDirectory(
      pageNum,
      this.props.match.params.type,
      this.props.auth.universityName,
      this.state.filter.name,
      this.state.filter.location,
      this.state.filter.industry
    );
  };

  setFilter = filter => {
    console.log("SET FILTER: ", filter);
    this.setState({ filter });
    this.props
      .fetchDirectory(
        1,
        this.props.match.params.type,
        this.props.auth.universityName,
        filter.name,
        filter.location,
        filter.industry
      )
      .then(data => {
        this.setPageNumbers(this.props.directory.count);
      });
  };

  render() {
    console.log("FILTERRRRR: ", this.props.filter);
    if (Object.getOwnPropertyNames(this.props.directory).length === 0) {
      console.log("NONE");
      return <div>Loading</div>;
    } else {
      console.log(this.props.directory.rows);
      const mentorsDetails = this.props.directory.rows;
      return (
        <div>
          <Header />
          {this.props.auth.accountType === "University" ? (
            <Link to="/university_dashboard">Back to dashboard</Link>
          ) : this.props.auth.accountType === "Mentor" ? (
            <Link to="/mentor/dashboard">Back to dashboard</Link>
          ) : this.props.auth.accountType === "Mentee" ? (
            <Link to="/mentee/dashboard">Back to dashboard</Link>
          ) : (
            ""
          )}
          <SearchFormContainer setFilter={this.setFilter} />
          <Directory
            details={mentorsDetails}
            showPage={this.showPage}
            numberOfPages={this.state.numberOfPages}
          />
        </div>
      );
    }
  }
}
const mapStateToProps = state => ({
  directory: state.directory,
  auth: state.auth,
  filter: state.filter
});

export default connect(mapStateToProps, { fetchDirectory })(DirectoryContainer);

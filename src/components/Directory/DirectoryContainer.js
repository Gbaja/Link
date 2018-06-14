import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { fetchDirectory } from "../../actions/get_requests";
import SearchFormContainer from "../SearchForm/SearchFormContainer";
import Directory from "./Directory";
import Header from "../Shared/Header";
import { FormsSubmitButton, Links } from "../Shared/Shared.styled";
import { DirectoryContainerDiv } from "./Directory.Styled";
import Loading from "../Shared/Loading";

class DirectoryContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      currentPage: 0,
      numberOfPages: [],
      filter: {}
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.directory !== prevProps.directory) {
      this.setState({ loading: false });
    }
  }

  fetchData = () => {
    this.props
      .fetchDirectory(
        1,
        this.props.match.params.type,
        this.props.auth.universityName,
        "",
        "",
        ""
      )
      .then(data => {
        this.setPageNumbers(this.props.directory.count);
      });
  };

  setPageNumbers = number => {
    let total = Math.ceil(number / 4);
    let arr = [];
    while (total > 0) {
      arr.unshift(total--);
    }
    this.setState({ numberOfPages: arr });
  };

  showPage = pageNum => () => {
    this.setState({ loading: true });
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
    this.setState({ filter });
    this.setState({ loading: true });
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
    if (
      Object.getOwnPropertyNames(this.props.directory).length === 0 ||
      this.state.loading
    ) {
      return (
        <div>
          <Header />
          <Loading />
        </div>
      );
    } else {
      const mentorsDetails = this.props.directory.rows;
      const accountType = this.props.auth.accountType.toLowerCase();
      return (
        <div>
          <Header />
          {this.props.auth.accountType === "University" ? (
            <FormsSubmitButton>
              <Links to="/university_dashboard">Back to dashboard</Links>
            </FormsSubmitButton>
          ) : this.props.auth.accountType === "Mentor" ||
          this.props.auth.accountType === "Mentee" ? (
            <FormsSubmitButton>
              <Links to={`/${accountType}/dashboard`}>Back to dashboard</Links>{" "}
            </FormsSubmitButton>
          ) : (
            ""
          )}
          <DirectoryContainerDiv>
            <SearchFormContainer
              setFilter={this.setFilter}
              fetchData={this.fetchData}
            />
            <Directory
              details={mentorsDetails}
              showPage={this.showPage}
              numberOfPages={this.state.numberOfPages}
            />
          </DirectoryContainerDiv>
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

export default connect(
  mapStateToProps,
  { fetchDirectory }
)(DirectoryContainer);

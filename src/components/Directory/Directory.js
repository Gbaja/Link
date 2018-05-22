import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { fetchDirectory } from "../../actions/get_requests";
import SearchFormContainer from "../SearchForm/SearchFormContainer";

class Directory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0,
      numberOfPages: []
    };
  }

  componentDidMount() {
    this.props
      .fetchDirectory(
        1,
        this.props.match.params.type,
        this.props.auth.universityName
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
    this.props.fetchDirectory(
      pageNum,
      this.props.match.params.type,
      this.props.auth.universityName
    );
  };

  renderDetails = data => {
    return (
      <div>
        <p>
          {data.firstName} {data.lastName}
        </p>
        <p>
          {" "}
          Current Job: {data.jobTitle} at {data.company}
        </p>
        <p> Industry: {data.industry}</p>
        <p> University: {data.universityName}</p>
        <p>
          Degree: {data.degree} {data.graduationYear}
        </p>
        <Link to={`profile/${data.accountType}/${data.id}`}>More info</Link>
      </div>
    );
  };
  render() {
    if (Object.getOwnPropertyNames(this.props.directory).length === 0) {
      console.log("NONE");
      return <div>Loading</div>;
    } else {
      console.log(this.props.directory.rows);
      const mentorsDetails = this.props.directory.rows;
      return (
        <div>
          <h1>All {`${this.props.match.params.type}s`}</h1>
          <SearchFormContainer />
          <h3> People </h3>
          {mentorsDetails.map(data => {
            return (
              <div key={data.id}>
                <p>
                  {data.firstName} {data.lastName}
                </p>
                <p>
                  {" "}
                  {data.jobTitle} at {data.company}
                </p>
                <p> {data.industry}</p>
                <p>{data.location}</p>
                <p> {data.universityName}</p>
                <p>
                  {data.degree} {data.graduationYear}
                </p>
                <Link to={`profile/${data.accountType}/${data.id}`}>
                  View profile
                </Link>
              </div>
            );
          })}
          {this.state.numberOfPages.map(num => {
            return (
              <span key={num} onClick={this.showPage(num)}>
                {num}
              </span>
            );
          })}
        </div>
      );
    }
  }
}
const mapStateToProps = state => ({
  directory: state.directory,
  auth: state.auth
});

export default connect(mapStateToProps, { fetchDirectory })(Directory);

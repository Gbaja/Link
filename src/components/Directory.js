import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { fetchDirectory } from "../actions/get_requests";
import SearchFormContainer from "./SearchForm/SearchFormContainer";
//import Pagination from "../Shared/Pagination";

class Directory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0,
      numberOfPages: []
    };
  }
  componentDidMount() {
    this.props.fetchDirectory(1, this.props.match.params.type).then(data => {
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
    this.props.fetchDirectory(pageNum, this.props.match.params.type);
  };

  renderDetails = data => {
    if (this.props.match.params.type === "mentor") {
      return (
        <div key={data.id}>
          <p>
            {" "}
            Name : {data.firstName} {data.lastName}
          </p>
          <p> Current Job : {data.currentRole}</p>
          <p> Current Industry: {data.currentIndustry}</p>
          <p> Location: {data.location}</p>
          <p>
            {" "}
            <Link to={`profile/${data.accountType}/${data.id}`}>
              {" "}
              More info
            </Link>{" "}
          </p>
        </div>
      );
    } else {
      return (
        <div key={data.id}>
          <p>
            {" "}
            Name : {data.firstName} {data.lastName}
          </p>
          <p> Current Job : {data.currentMotive}</p>
          <p> Current Industry: {data.mentorIndustry}</p>
          <p> Location: {data.location}</p>
          <p>
            {" "}
            <Link to={`profile/${data.accountType}/${data.id}`}>
              {" "}
              More info
            </Link>{" "}
          </p>
        </div>
      );
    }
  };
  render() {
    if (Object.getOwnPropertyNames(this.props.directory).length === 0) {
      console.log("NONE");
      return <div>Loading</div>;
    } else {
      this.props.directory.count;
      const mentorsDetails = this.props.directory.rows;
      return (
        <div>
          <h1>All {`${this.props.match.params.type}s`}</h1>
          <SearchFormContainer />
          <h3> People </h3>
          {mentorsDetails.map(this.renderDetails)}
          {/* <Pagination numberOfPages={this.state.numberOfPages} /> */}
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
  directory: state.directory
});

export default connect(mapStateToProps, { fetchDirectory })(Directory);

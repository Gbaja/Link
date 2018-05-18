import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { fetchDirectory } from "../../actions/get_requests";
import SearchFormContainer from "../SearchForm/SearchFormContainer";
import Directory from "../Directory";

class MenteesDirectory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0,
      numberOfPages: []
    };
  }
  componentDidMount() {
    this.props.fetchDirectory(1, this.type()).then(data => {
      console.log("DATA: ", data);
      this.setPageNumbers(this.props.directory.count);
    });
  }
  type = () => {
    return this.props.match.params.type || "mentee";
  };
  setPageNumbers = number => {
    let total = Math.ceil(number / 1);
    let arr = [];
    while (total > 0) {
      arr.unshift(total--);
    }
    this.setState({ numberOfPages: arr });
  };

  showPage = pageNum => () => {
    this.props.fetchDirectory(pageNum, this.type());
  };

  render() {
    if (Object.getOwnPropertyNames(this.props.directory).length === 0) {
      console.log("NONE");
      return <div>Loading</div>;
    } else {
      const menteesDetails = this.props.directory.rows;
      return (
        <div>
          <h1>All mentees</h1>
          <SearchFormContainer />
          <h3> People </h3>
          {menteesDetails.map(data => {
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
          })}
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

export default connect(mapStateToProps, { fetchDirectory })(MenteesDirectory);

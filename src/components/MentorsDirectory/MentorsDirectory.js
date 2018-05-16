import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { fetchMentors } from "../../actions/get_requests";
import LogOutBtn from "../logout";
import SearchFormContainer from "../SearchForm/SearchFormContainer";

class MentorsDirectory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0,
      numberOfPages: []
    };
  }
  componentDidMount() {
    this.props.fetchMentors(1).then(data => {
      this.setPageNumbers(this.props.mentors.count);
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
    this.props.fetchMentors(pageNum);
  };

  render() {
    if (Object.getOwnPropertyNames(this.props.mentors).length === 0) {
      console.log("NONE");
      return <div>Loading</div>;
    } else {
      this.props.mentors.count;
      const mentorsDetails = this.props.mentors.rows;
      return (
        <div>
          <h1>All mentors</h1>
          <SearchFormContainer />
          <h3> People </h3>
          {mentorsDetails.map(data => {
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
  mentors: state.mentors
});

export default connect(mapStateToProps, { fetchMentors })(MentorsDirectory);

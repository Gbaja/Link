import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { fetchMentors } from "../../actions/get_requests";
import LogOutBtn from "../logout";

class MentorsDirectory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNumbers: 1,
      dataCount: 0
    };
  }
  componentDidMount() {
    this.props.fetchMentors(1);
  }
  range = number => {
    let total = Math.ceil(number / 10);
    let arr = [];
    while (total > 0) {
      arr.unshift(total--);
    }
    return arr;
  };
  render() {
    if (Object.getOwnPropertyNames(this.props.mentors).length === 0) {
      console.log("NONE");
      return <div>Loading</div>;
    } else {
      const pageNumbers = this.range(this.props.mentors.count);
      const mentorsDetails = this.props.mentors.rows;
      return (
        <div>
          <h1>People</h1>
          {mentorsDetails.map(data => {
            return (
              <div key={data.id}>
                <p> First Name : {data.firstName}</p>
              </div>
            );
          })}
          {pageNumbers.map(num => {
            return <span key={num}> {num} </span>;
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

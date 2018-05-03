import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { fetchMentors } from "../../actions/get_requests";
import LogOutBtn from "../logout";

class MentorsDirectory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNum: 1,
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
    if (!this.props.mentors) return <div>Loading</div>;
    else {
      const pageNumbers = this.range(this.props.mentors.count);
      console.log("PAGE NUMBERS: ", pageNumbers);
      console.log("MENTORS: ", this.props.mentors.rows);
      return (
        <div>
          <h1>Mentors</h1>
          {pageNumbers.map(num => {
            return <span key={num}> {num} </span>;
          })}
          {/* {this.props.mentors.rows.map(data => {
            return (
              <div>
                <p> {data.firstName}</p>
              </div>
            );
          })} */}
        </div>
      );
    }
  }
}
const mapStateToProps = state => ({
  mentors: state.mentors
});

export default connect(mapStateToProps, { fetchMentors })(MentorsDirectory);

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { fetchMentors } from "../../actions/get_requests";
import LogOutBtn from "../logout";

class MentorsDirectory extends Component {
  componentDidMount() {
    this.props.fetchMentors(1);
  }
  render() {
    if (!this.props.mentors) return <div>Loading</div>;
    console.log("MENTORS: ", this.props.mentors);
    return (
      <div>
        <h1>Mentors</h1>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  mentors: state.mentors
});

export default connect(mapStateToProps, { fetchMentors })(MentorsDirectory);

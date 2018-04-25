import React, { Component } from "react";
import { Link } from "react-router-dom";
import LogOutBtn from "../logout";

class MentorDashboard extends Component {
  render() {
    return (
      <div>
        <h1>Welcome</h1>
        <LogOutBtn />
        <Link to={`/${this.props.match.params.id}/mentor/my_profile`}>
          My profile
        </Link>
      </div>
    );
  }
}

export default MentorDashboard;

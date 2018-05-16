import React, { Component } from "react";
import { Link } from "react-router-dom";
import LogOutBtn from "../logout";

class MentorDashboard extends Component {
  render() {
    return (
      <div>
        <h1>Welcome</h1>
        <LogOutBtn />
        <p>
          {" "}
          <Link to={`/${this.props.match.params.id}/mentor/my_profile`}>
            My profile
          </Link>
        </p>
        <p>
          {" "}
          <Link to="/mentees_directory"> View mentees </Link>
        </p>
        <p>
          <Link to="/1/mentee/dashboard">Mentee profile</Link>
        </p>
        <button> Delete </button>
      </div>
    );
  }
}

export default MentorDashboard;

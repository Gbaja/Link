import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import LogOutBtn from "../logout";
import DeleteAccount from "../DeleteAccount";

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
        <DeleteAccount />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, null)(MentorDashboard);

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import LogOutBtn from "../Shared/Logout";
import DeleteAccount from "../Shared/DeleteAccount";
import Header from "../Shared/Header";

class MentorDashboard extends Component {
  render() {
    return (
      <div>
        <Header />
        <h1>Welcome {this.props.auth.firstName}</h1>
        <p>
          {" "}
          <Link to="/mentor/my_profile">My profile</Link>
        </p>
        <p>
          {" "}
          <Link to="/directory/mentee"> View mentees </Link>
        </p>
        <p>
          {" "}
          <Link to="/directory/mentor"> View mentors </Link>
        </p>
        <p>
          {" "}
          <Link to="/mentor/requests"> View requests </Link>
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

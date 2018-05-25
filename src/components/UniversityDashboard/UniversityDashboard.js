import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import LogOutBtn from "../Shared/Logout";
import DeleteAccount from "../Shared/DeleteAccount";

class UniversityDashboard extends Component {
  render() {
    return (
      <div>
        <h1>Welcome {this.props.auth.name}</h1>
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
          <Link to="/pending_applications"> View pending </Link>
        </p>
        <LogOutBtn />
        <DeleteAccount />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, null)(UniversityDashboard);

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import LogOutBtn from "../Shared/Logout";
import DeleteAccount from "../Shared/DeleteAccount";
import NewUniversityForm from "../NewUniversity/NewUniversityFormContainer";

class MentorDashboard extends Component {
  render() {
    return (
      <div>
        <h1>Welcome</h1>
        <LogOutBtn />
        <NewUniversityForm />
        <DeleteAccount />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, null)(MentorDashboard);
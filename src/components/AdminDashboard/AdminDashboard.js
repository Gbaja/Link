import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import LogOutBtn from "../Shared/Logout";
import DeleteAccount from "../Shared/DeleteAccount";

class MentorDashboard extends Component {
  render() {
    return (
      <div>
        <h1>Welcome</h1>
        <Link to="add_new_uni">Add new university</Link>
        <LogOutBtn />
        <DeleteAccount />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, null)(MentorDashboard);

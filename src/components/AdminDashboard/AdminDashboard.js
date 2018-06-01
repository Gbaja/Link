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
        <h1>Welcome {this.props.auth.name}</h1>
        <Link to="add_new_uni">Add new university</Link>
        <DeleteAccount />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, null)(MentorDashboard);

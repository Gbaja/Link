import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import LogOutBtn from "../logout";
import { deleteAccount } from "../../actions/delete_requests";

class MentorDashboard extends Component {
  deleteAccount = data => () => {
    const body = {
      email: data
    };
    console.log(body);
    this.props.deleteAccount(body);
    // .then(res => {
    //   console.log(res);
    //   this.props.history.push("/");
    // });
  };

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
        <button onClick={this.deleteAccount(this.props.auth.email)}>
          {" "}
          Delete{" "}
        </button>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { deleteAccount })(MentorDashboard);

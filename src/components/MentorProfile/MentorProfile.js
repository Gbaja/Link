import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { mentorProfile } from "../../actions/get_requests";

class Profile extends Component {
  render() {
    if (this.props.auth === null) return <div> Loading</div>;
    const data = this.props.auth;
    console.log(data.firstName);
    return (
      <div>
        <h1> Your Profile </h1>
        <p>First name: {data.firstName}</p>
        <p>Last name: {data.lastName}</p>
        <p>Email: {data.email}</p>
        <p>Account type: {data.accountType}</p>
        <p>Current role: {data.currentRole}</p>
        <p>Current company: {data.currentCompany}</p>
        <p>Age: {data.age}</p>
        <p>Short biography: {data.biography}</p>
        <p>What you can offer: {data.offer}</p>
        <p>Motivation for mentoring: {data.motivation}</p>
        <p>Date joined: {data.createdAt.split("T")[0]}</p>
        <Link to={`/${this.props.match.params.id}/mentor/my_profile/edit`}>
          Edit profile
        </Link>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, null)(Profile);

//export default Profile;

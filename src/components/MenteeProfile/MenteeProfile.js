import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class MenteeProfile extends Component {
  render() {
    const menteeProfileData = this.props.auth;
    if (menteeProfileData === null) return <div> Loading</div>;
    return (
      <div>
        <h1> Your Profile </h1>
        <p>Account type: {menteeProfileData.accountType}</p>
        <p>First name: {menteeProfileData.firstName}</p>
        <p>Last name: {menteeProfileData.lastName}</p>
        <p>Email: {menteeProfileData.email}</p>
        <p> Age: {menteeProfileData.age}</p>
        <p>Your current location: {menteeProfileData.location}</p>
        <p> University name {menteeProfileData.universityName}</p>
        <p> Degree: {menteeProfileData.degree}</p>
        <p>
          LinkedIn or other social media url:{" "}
          <a href={menteeProfileData.socialMediaUrl}>
            {menteeProfileData.socialMediaUrl}
          </a>
        </p>
        <p>Current motive: {menteeProfileData.currentMotive}</p>
        <p>
          What industry you want a mentor from?{" "}
          {menteeProfileData.mentorIndustry}
        </p>
        <p>Reason: {menteeProfileData.reason}</p>
        <p>Short biography: {menteeProfileData.biography}</p>
        <p> Availability: {menteeProfileData.status}</p>
        <p>Date joined: {menteeProfileData.createdAt.split("T")[0]}</p>
        <Link to="/mentee/my_profile/edit">Edit profile</Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, null)(MenteeProfile);

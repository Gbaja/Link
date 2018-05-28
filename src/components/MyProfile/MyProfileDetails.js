import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class MyProfileDetails extends Component {
  render() {
    const {
      accountType,
      firstName,
      lastName,
      email,
      location,
      gender,
      ethnicity,
      imageUrl,
      universityName,
      degree,
      graduationYear,
      jobTitle,
      company,
      dateStarted,
      endDate,
      industry,
      biography,
      reason,
      socialMediaUrl,
      availability,
      createdAt
    } = this.props.auth;
    if (this.props.auth === null) return <div> Loading</div>;
    return (
      <div>
        <h1> Your Profile </h1>
        <img src={imageUrl} />
        <p>Account type: {accountType}</p>
        <p>First name: {firstName}</p>
        <p>Last name: {lastName}</p>
        <p>Email: {email}</p>
        <p>Your current location: {location}</p>
        <p>Gender: {gender}</p>
        <p> Ethnicity {ethnicity}</p>
        <p> University name {universityName}</p>
        <p> Degree: {degree}</p>
        <p> Graduation year {graduationYear}</p>
        <p> Job title {jobTitle}</p>
        <p> Company {company}</p>
        <p>Date started {dateStarted}</p>
        <p> Industry {industry} </p>
        <p>
          LinkedIn or other social media url:{" "}
          <a href={socialMediaUrl}>{socialMediaUrl}</a>
        </p>
        <p>Reason: {reason}</p>
        <p>Short biography: {biography}</p>
        <p> Availability: {availability}</p>
        <p>Date joined: {createdAt.split("T")[0]}</p>
        <Link to="/mentee/my_profile/edit">Edit profile</Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, null)(MyProfileDetails);

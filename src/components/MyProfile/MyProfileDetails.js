import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Alert from "../Shared/Alert";
import {
  ContainerDiv,
  SubContainerDiv,
  ProfileImg,
  ButtonLink,
  ProfileTextP,
  ProfileWhatP,
  ProfileHeadingH3
} from "./MyProfile.styled";
import { FormsSubmitButton } from "../Shared/Shared.styled";

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
      cv,
      shadow,
      interview,
      job,
      postgrad,
      career,
      socialMediaUrl,
      availability,
      createdAt
    } = this.props.auth;
    const account = accountType.toLowerCase();
    if (this.props.auth === null) return <div> Loading</div>;
    return (
      <ContainerDiv>
        <SubContainerDiv>
          {alert && <Alert alert={this.props.alert} />}
          <ProfileImg src={imageUrl} />
          <ProfileWhatP>Account type</ProfileWhatP>
          <ProfileTextP>{accountType}</ProfileTextP>
          <ProfileWhatP> First name</ProfileWhatP>
          <ProfileTextP>{firstName}</ProfileTextP>
          <ProfileWhatP>Last name</ProfileWhatP>
          <ProfileTextP>{lastName}</ProfileTextP>
          <ProfileWhatP>Email</ProfileWhatP>
          <ProfileTextP>Email: {email}</ProfileTextP>
          <ProfileWhatP>Location</ProfileWhatP>
          <ProfileTextP>{location}</ProfileTextP>
          <ProfileWhatP> About me</ProfileWhatP>
          <ProfileTextP>{biography}</ProfileTextP>
          <ProfileWhatP>Gender</ProfileWhatP>
          <ProfileTextP>{gender}</ProfileTextP>
          <ProfileWhatP>Ethnicity</ProfileWhatP>
          <ProfileTextP> {ethnicity}</ProfileTextP>
          <ProfileHeadingH3>Education</ProfileHeadingH3>
          <ProfileWhatP>University Name</ProfileWhatP>
          <ProfileTextP>{universityName}</ProfileTextP>
          <ProfileWhatP>Course</ProfileWhatP>
          <ProfileTextP>{degree}</ProfileTextP>
          <ProfileWhatP>Graduation Year</ProfileWhatP>
          <ProfileTextP>{graduationYear}</ProfileTextP>
          <ProfileHeadingH3>Employment</ProfileHeadingH3>
          <ProfileWhatP> Title</ProfileWhatP>
          <ProfileTextP> {jobTitle}</ProfileTextP>
          <ProfileWhatP> Company</ProfileWhatP>
          <ProfileTextP>{company}</ProfileTextP>
          <ProfileWhatP> Date started</ProfileWhatP>
          <ProfileTextP>{dateStarted}</ProfileTextP>
          <ProfileWhatP> Industry</ProfileWhatP>
          <ProfileTextP> {industry} </ProfileTextP>
          <ProfileHeadingH3>Other</ProfileHeadingH3>
          <ProfileWhatP>LinkedIn Url</ProfileWhatP>
          <ProfileTextP>
            <a href={socialMediaUrl}>{socialMediaUrl}</a>
          </ProfileTextP>
          <ProfileWhatP>Reason</ProfileWhatP>
          <ProfileTextP>{reason}</ProfileTextP>
          <ProfileWhatP> Areas of focus</ProfileWhatP>
          <ul>
            {cv ? <li>Resume or cover letter tips</li> : false}
            {shadow ? <li>Job shadow opportunities</li> : false}
            {interview ? <li>Mock Interviews</li> : false}
            {job ? <li>Post job and internships</li> : false}
            {postgrad ? <li>Post Graduate Application</li> : false}
            {career ? <li>Professional and career exploration</li> : false}
          </ul>
          <ProfileWhatP>Availability</ProfileWhatP>
          <ProfileTextP>{availability}</ProfileTextP>
          <ProfileWhatP>Date Joined </ProfileWhatP>
          <ProfileTextP>{createdAt.split("T")[0]}</ProfileTextP>
          <FormsSubmitButton>
            <ButtonLink to="/mentee/my_profile/edit">Edit profile</ButtonLink>
          </FormsSubmitButton>
          <FormsSubmitButton>
            <ButtonLink to={`/${account}/dashboard`}>View dashboard</ButtonLink>
          </FormsSubmitButton>
        </SubContainerDiv>
      </ContainerDiv>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  alert: state.alert
});

export default connect(mapStateToProps, null)(MyProfileDetails);

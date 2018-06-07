import React from "react";
import { Link } from "react-router-dom";
import {
  ProfileContainerDiv,
  ProfileImg,
  ProfileImageDiv,
  ProfileNameH1,
  ProfileSubContainerDiv,
  ProfileWhatP
} from "./IndividualProfile.Styled";
import { ProfileTextP, ProfileHeadingH3 } from "../MyProfile/MyProfile.styled";
import { FormsSubmitButton, Links } from "../Shared/Shared.styled";

const DisplayProfile = props => {
  const {
    id,
    firstName,
    lastName,
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
    industry,
    biography,
    reason,
    socialMediaUrl,
    cv,
    shadow,
    interview,
    job,
    postgrad,
    career,
    createdAt,
    availability
  } = props.profile;
  return (
    <ProfileContainerDiv>
      <ProfileSubContainerDiv>
        <ProfileNameH1>
          {firstName} {lastName}
        </ProfileNameH1>
        {imageUrl ? (
          <ProfileImageDiv>
            <ProfileImg src={imageUrl} alt="Individual person" />
          </ProfileImageDiv>
        ) : (
          <div>
            <i
              style={{
                width: "200px",
                height: "200px",
                margin: "0 auto",
                display: "block"
              }}
              className="fas fa-user-alt"
            />
          </div>
        )}
        <ProfileWhatP>Short biography</ProfileWhatP>
        <ProfileTextP>{biography}</ProfileTextP>
        <ProfileWhatP>Location</ProfileWhatP>
        <ProfileTextP>{location}</ProfileTextP>
        <ProfileWhatP>Gender</ProfileWhatP>
        <ProfileTextP>{gender}</ProfileTextP>
        <ProfileWhatP>Ethnicity</ProfileWhatP>
        <ProfileTextP>{ethnicity}</ProfileTextP>
        <ProfileHeadingH3>Education</ProfileHeadingH3>
        <ProfileWhatP>University name</ProfileWhatP>
        <ProfileTextP>{universityName}</ProfileTextP>
        <ProfileWhatP>Degree</ProfileWhatP>
        <ProfileTextP>{degree}</ProfileTextP>
        <ProfileWhatP>Graduation year</ProfileWhatP>
        <ProfileTextP>{graduationYear}</ProfileTextP>
        <ProfileHeadingH3>Employment</ProfileHeadingH3>
        <ProfileWhatP>Job title</ProfileWhatP>
        <ProfileTextP>{jobTitle}</ProfileTextP>
        <ProfileWhatP>Company</ProfileWhatP>
        <ProfileTextP>{company}</ProfileTextP>
        <ProfileWhatP>Date started</ProfileWhatP>
        <ProfileTextP>{dateStarted}</ProfileTextP>
        <ProfileWhatP>Industry</ProfileWhatP>
        <ProfileTextP>{industry}</ProfileTextP>
        <ProfileHeadingH3>Other</ProfileHeadingH3>
        <ProfileWhatP>Reason</ProfileWhatP>
        <ProfileTextP>{reason}</ProfileTextP>
        <ProfileWhatP>Social media profile</ProfileWhatP>
        <ProfileTextP>{socialMediaUrl}</ProfileTextP>
        <ProfileWhatP>Availability</ProfileWhatP>
        <ProfileTextP>{availability}</ProfileTextP>
        {cv || shadow || interview || job || postgrad || career ? (
          <ProfileWhatP> Areas of focus</ProfileWhatP>
        ) : (
          ""
        )}
        <ul>
          {cv ? <li>Resume or cover letter tips</li> : false}
          {shadow ? <li>Job shadow opportunities</li> : false}
          {interview ? <li>Mock Interviews</li> : false}
          {job ? <li>Post job and internships</li> : false}
          {postgrad ? <li>Post Graduate Application</li> : false}
          {career ? <li>Professional and career exploration</li> : false}
        </ul>
        <ProfileWhatP>Date joined</ProfileWhatP>
        <ProfileTextP>{createdAt}</ProfileTextP>
        {props.user !== "Mentor" && props.accountType !== "Mentee" ? (
          <FormsSubmitButton>
            <Links to={`/request_mentorship/${id}`}>Request mentorship</Links>
          </FormsSubmitButton>
        ) : (
          ""
        )}
      </ProfileSubContainerDiv>
    </ProfileContainerDiv>
  );
};

export default DisplayProfile;

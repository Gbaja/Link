import React from "react";
import { Link } from "react-router-dom";
import { ProfileContainerDiv } from "./IndividualProfile.Styled";

const DisplayProfile = props => {
  const {
    id,
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
    cv,
    shadow,
    interview,
    job,
    postgrad,
    career,
    availability
  } = props.profile;
  return (
    <ProfileContainerDiv>
      <h1>
        {firstName} {lastName}
      </h1>
      {imageUrl ? (
        <img src={imageUrl} />
      ) : (
        <div>
          <i
            style={{ width: "100px", height: "100px" }}
            className="fas fa-user-alt"
          />
        </div>
      )}
      <p>{biography}</p>
      <p>{location}</p>
      <p>{gender}</p>
      <p>{ethnicity}</p>
      <h3>Education</h3>
      <p>{universityName}</p>
      <p>{degree}</p>
      <p>{graduationYear}</p>
      <h3>Employment</h3>
      <p>{jobTitle}</p>
      <p>{company}</p>
      <p>{dateStarted}</p>
      <p>{industry}</p>
      <p>{reason}</p>
      <p>{socialMediaUrl}</p>
      <p>{availability}</p>
      {cv || shadow || interview || job || postgrad || career ? (
        <p> Areas of focus</p>
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
      {props.user !== "Mentor" && props.accountType !== "Mentee" ? (
        <Link to={`/request_mentorship/${id}`}>Request mentorship</Link>
      ) : (
        ""
      )}
    </ProfileContainerDiv>
  );
};

export default DisplayProfile;

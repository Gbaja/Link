import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import {
  fetchMentorProfile,
  fetchMenteeProfile
} from "../../actions/get_requests";

class Landing extends Component {
  componentDidMount() {
    if (this.props.match.params.accountType === "Mentor") {
      this.props.fetchMentorProfile(this.props.match.params.id);
    } else if (this.props.match.params.accountType === "Mentee") {
      this.props.fetchMenteeProfile(this.props.match.params.id);
    }
  }
  renderMentor() {
    const {
      firstName,
      lastName,
      age,
      location,
      universityName,
      degree,
      currentIndustry,
      currentRole,
      currentCompany,
      biography,
      motivation,
      offer,
      socialMediaUrl,
      status
    } = this.props.profile;
    return (
      <div>
        <p>First name: {firstName}</p>
        <p>Last name: {lastName}</p>
        <p>Age: {age}</p>
        <p>Location: {location}</p>
        <p>University name: {universityName}</p>
        <p>Degree: {degree}</p>
        <p>Current Industry: {currentIndustry}</p>
        <p>Current Job title: {currentRole}</p>
        <p>Current company: {currentCompany}</p>
        <p>Biography: {biography}</p>
        <p>Motivation: {motivation}</p>
        <p>What I can offer: {offer}</p>
        <p>Social media url: {socialMediaUrl}</p>
        <p>Availability: {status}</p>
      </div>
    );
  }

  renderMentee() {
    const {
      firstName,
      lastName,
      location,
      currentMotive,
      age,
      universityName,
      degree,
      mentorIndustry,
      reason,
      biography,
      socialMediaUrl,
      status
    } = this.props.profile;
    return (
      <div>
        <p>First name: {firstName}</p>
        <p>Last name: {lastName}</p>
        <p>Location: {location}</p>
        <p>Current motive: {currentMotive}</p>
        <p>Age: {age}</p>
        <p>University name: {universityName}</p>
        <p>Degree: {degree}</p>
        <p>What industry I want a mentor from: {mentorIndustry}</p>
        <p>Reason I want a mentor: {reason}</p>
        <p>Biography: {biography}</p>
        <p>Social media url: {socialMediaUrl}</p>
        <p>{status}</p>
      </div>
    );
  }

  render() {
    console.log(this.props.profile);
    return (
      <div>
        <h3>Pofile page</h3>
        {this.props.match.params.accountType === "Mentor"
          ? this.renderMentor()
          : this.renderMentee()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(mapStateToProps, {
  fetchMenteeProfile,
  fetchMentorProfile
})(Landing);

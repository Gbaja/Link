import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { menteeProfile } from "../../actions/get_requests";

class Profile extends Component {
  componentDidMount() {
    this.data = this.props.menteeProfile(this.props.match.params.id);
  }
  render() {
    if (this.props.profile === null) return <div> Loading</div>;
    const data = this.props.profile;
    console.log(data.firstName);
    return (
      <div>
        <h1> Your Profile </h1>
        <p>First name: {data.firstName}</p>
        <p>Last name: {data.lastName}</p>
        <p>Email: {data.email}</p>
        <p>Account type: {data.accountType}</p>
        <p>Your current location: {data.baseArea}</p>
        <p>Current motive: {data.currentMotive}</p>
        <p>Reason: {data.reason}</p>
        <p>Short biography: {data.biography}</p>
        <p>What industry you want a mentor from?{data.mentorIndustry}</p>
        <p>Date joined: {data.createdAt.split("T")[0]}</p>
        {/* <Link to={`/${this.props.match.params.id}/mentor/my_profile/edit`}>
          Edit profile
        </Link> */}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(mapStateToProps, { menteeProfile })(Profile);

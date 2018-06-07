import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { fetchProfile } from "../../actions/get_requests";
import Header from "../Shared/Header";
import { FormsSubmitButton } from "../Shared/Shared.styled";
import DisplayProfile from "./DisplayProfile";

class IndividualProfilePage extends Component {
  componentDidMount() {
    const { id, accountType } = this.props.match.params;
    this.props.fetchProfile(id, accountType);
  }

  goBackBtn = () => {
    this.props.history.goBack();
  };
  render() {
    console.log(this.props.profile);
    return (
      <div>
        <Header />
        <FormsSubmitButton onClick={this.goBackBtn}>
          <p>Go back</p>
        </FormsSubmitButton>
        <DisplayProfile
          profile={this.props.profile}
          user={this.props.auth.accountType}
          accountType={this.props.match.params.accountType}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  {
    fetchProfile
  }
)(IndividualProfilePage);

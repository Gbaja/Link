import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import LogOutBtn from "../Shared/Logout";
import DeleteAccount from "../Shared/DeleteAccount";
import Header from "../Shared/Header";
import {
  DashboardHeadingH1,
  DashboardContainerDiv,
  DashboardP,
  DashboardLinks
} from "../Shared/Dashboard.Styled";

class MenteeDashboard extends Component {
  render() {
    return (
      <div>
        <Header />
        <DashboardHeadingH1>
          Welcome {this.props.auth.firstName}
        </DashboardHeadingH1>
        <DashboardContainerDiv>
          <DashboardP>
            <DashboardLinks to="/mentee/my_profile">My profile</DashboardLinks>
          </DashboardP>
          <DashboardP>
            <DashboardLinks to="/directory/mentee">View mentees</DashboardLinks>
          </DashboardP>
          <DashboardP>
            <DashboardLinks to="/directory/mentor">View mentors</DashboardLinks>
          </DashboardP>
          <DashboardP>
            <DashboardLinks to="/requests"> View requests </DashboardLinks>
          </DashboardP>
          <DeleteAccount />
        </DashboardContainerDiv>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  null
)(MenteeDashboard);

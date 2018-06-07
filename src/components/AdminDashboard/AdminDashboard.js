import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import LogOutBtn from "../Shared/Logout";
import DeleteAccount from "../Shared/DeleteAccount";
import Header from "../Shared/Header";
import {
  DashboardContainerDiv,
  DashboardP,
  DashboardLinks,
  DashboardHeadingH1
} from "../Shared/Dashboard.Styled";

class MentorDashboard extends Component {
  render() {
    return (
      <div>
        <Header />
        <DashboardHeadingH1>Welcome {this.props.auth.name}</DashboardHeadingH1>
        <DashboardContainerDiv>
          <DashboardP>
            <DashboardLinks to="add_new_uni">Add new university</DashboardLinks>
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

export default connect(mapStateToProps, null)(MentorDashboard);

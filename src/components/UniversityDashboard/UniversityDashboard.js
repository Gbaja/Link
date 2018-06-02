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

class UniversityDashboard extends Component {
  render() {
    return (
      <div>
        <Header />
        <DashboardHeadingH1>
          Welcome {this.props.auth.universityName}
        </DashboardHeadingH1>
        <DashboardContainerDiv>
          <DashboardP>
            {" "}
            <DashboardLinks to="/directory/mentee">
              {" "}
              View mentees{" "}
            </DashboardLinks>
          </DashboardP>
          <DashboardP>
            {" "}
            <DashboardLinks to="/directory/mentor">
              {" "}
              View mentors{" "}
            </DashboardLinks>
          </DashboardP>
          <DashboardP>
            {" "}
            <DashboardLinks to="/pending_applications">
              {" "}
              View pending{" "}
            </DashboardLinks>
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

export default connect(mapStateToProps, null)(UniversityDashboard);

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import React, { Component } from "react";

import Landing from "./Landing/Landing";
import SignupContainer from "./SignUp/SignUpContainer";
import LoginFormContainer from "./LogIn/LoginContainer";
import RedirectPage from "./redirect";
import ForgotPasswordForm from "./ForgotPassword/ForgotPasswordFormContainer";
import ResetPasswordForm from "./ForgotPassword/ResetPasswordFormContainer";
import MentorDashboard from "./MentorDashboard/MentorDashboard";
import MenteeDashboard from "./MenteeDashboard/MenteeDashboard";
import IndividualProfile from "./IndividualProfile/IndividualProfile";
import Directory from "./Directory/DirectoryContainer";
import MyProfileDetails from "./MyProfile/MyProfileDetails";
import MyProfileForm from "./MyProfile/MyProfileFormContainer";
import RequestForm from "./RequestMentorship/RequestMentorshipFormContainer";
import AdminDashboard from "./AdminDashboard/AdminDashboard";
import NewUniversityForm from "./NewUniversity/NewUniversityFormContainer";
import UniversityDashboard from "./UniversityDashboard/UniversityDashboard";
import PendingApplications from "./PendingApplications/PendingApplicationsContainer";
import PendingRequests from "./PendingRequests/PendingRequestsContainer";

class App extends Component {
  isMentor = () => this.props.auth.accountType === "Mentor";
  isMentee = () => this.props.auth.accountType === "Mentee";
  isUniversity = () => this.props.auth.accountType === "University";
  isAdmin = () => this.props.auth.accountType === "Admin";

  renderProtected = ({ hasAccess, renderPage }) => {
    return props =>
      hasAccess ? renderPage(props) : <RedirectPage {...props} />;
  };
  renderMentorPages = Component => {
    const loggedIn = this.props.auth;
    const hasAccess = loggedIn && this.isMentor();
    const renderPage = props => <Component {...props} />;
    return this.renderProtected({ hasAccess, renderPage });
  };

  renderMenteePages = Component => {
    const loggedIn = this.props.auth;
    const hasAccess = loggedIn && this.isMentee();
    const renderPage = props => <Component {...props} />;
    return this.renderProtected({ hasAccess, renderPage });
  };

  renderAdminPages = Component => {
    const loggedIn = this.props.auth;
    const hasAccess = loggedIn && this.isAdmin();
    const renderPage = props => <Component {...props} />;
    return this.renderProtected({ hasAccess, renderPage });
  };

  renderUniversityPages = Component => {
    const loggedIn = this.props.auth;
    const hasAccess = loggedIn && this.isUniversity();
    const renderPage = props => <Component {...props} />;
    return this.renderProtected({ hasAccess, renderPage });
  };

  renderSharedPages = Component => {
    const hasAccess = this.props.auth;
    const renderPage = props => <Component {...props} />;
    return this.renderProtected({ hasAccess, renderPage });
  };

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/mentor/dashboard"
            component={this.renderMentorPages(MentorDashboard)}
          />
          <Route exact path="/" component={Landing} />
          <Route exact path="/signup_form" component={SignupContainer} />
          <Route exact path="/login_form" component={LoginFormContainer} />
          <Route
            exact
            path="/mentee/dashboard"
            render={this.renderMenteePages(MenteeDashboard)}
          />
          <Route
            exact
            path="/mentor/my_profile"
            render={this.renderSharedPages(MyProfileDetails)}
          />
          <Route
            exact
            path="/mentee/my_profile"
            render={this.renderSharedPages(MyProfileDetails)}
          />
          <Route
            exact
            path="/mentor/my_profile/edit"
            render={this.renderSharedPages(MyProfileForm)}
          />
          <Route
            exact
            path="/mentee/my_profile/edit"
            render={this.renderSharedPages(MyProfileForm)}
          />
          <Route
            exact
            path="/directory/:type"
            render={this.renderSharedPages(Directory)}
          />
          <Route
            exact
            path="/profile/:accountType/:id"
            render={this.renderSharedPages(IndividualProfile)}
          />
          <Route
            exact
            path="/request_mentorship/:id"
            render={this.renderMenteePages(RequestForm)}
          />
          <Route
            exact
            path="/owner"
            render={this.renderAdminPages(AdminDashboard)}
          />
          <Route
            exact
            path
            path="/add_new_uni"
            render={this.renderAdminPages(NewUniversityForm)}
          />
          <Route
            exact
            path="/university_dashboard"
            render={this.renderUniversityPages(UniversityDashboard)}
          />
          <Route
            exact
            path="/pending_applications"
            render={this.renderUniversityPages(PendingApplications)}
          />
          <Route
            exact
            path="/mentor/requests"
            component={this.renderMentorPages(PendingRequests)}
          />
          <Route exact path="/forgot_password" component={ForgotPasswordForm} />
          <Route exact path="/reset_password" component={ResetPasswordForm} />
          <Route exact path="/unathorised" component={RedirectPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = ({ auth }) => ({ auth });
export default connect(mapStateToProps, null)(App);

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { currentUser } from "../actions/get_requests";
import React, { Component } from "react";
import Landing from "./Landing/Landing";
import SignupContainer from "./SignUp/SignUpContainer";
import LoginFormContainer from "./LogIn/LoginContainer";
import MentorDashboard from "./MentorDashboard/MentorDashboard";
import MenteeDashboard from "./MenteeDashboard/MenteeDashboard";
import MentorProfile from "./MentorProfile/MentorProfile";
import MenteeProfile from "./MenteeProfile/MenteeProfile";
import MentorProfileForm from "./MentorProfile/MentorProfileFormContainer";
import MenteeProfileForm from "./MenteeProfile/MenteeProfileFormContainer";
import MentorsDirectory from "./MentorsDirectory/MentorsDirectory";
import RedirectPage from "./redirect";
import ForgotPasswordForm from "./ForgotPassword/ForgotPasswordFormContainer";

class App extends Component {
  isMentor = () => this.props.auth.accountType === "Mentor";
  isMentee = () => this.props.auth.accountType === "Mentee";

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

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/:id/mentor/dashboard"
            component={this.renderMentorPages(MentorDashboard)}
          />
          <Route exact path="/" component={Landing} />
          <Route exact path="/signup_form" component={SignupContainer} />
          <Route exact path="/login_form" component={LoginFormContainer} />
          <Route
            exact
            path="/:id/mentee/dashboard"
            render={this.renderMenteePages(MenteeDashboard)}
          />
          <Route
            exact
            path="/:id/mentor/my_profile"
            render={this.renderMentorPages(MentorProfile)}
          />
          <Route
            exact
            path="/:id/mentee/my_profile"
            render={this.renderMenteePages(MenteeProfile)}
          />
          <Route
            exact
            path="/:id/mentor/my_profile/edit"
            render={this.renderMentorPages(MentorProfileForm)}
          />
          <Route
            exact
            path="/:id/mentee/my_profile/edit"
            render={this.renderMenteePages(MenteeProfileForm)}
          />
          <Route exact path="/mentors_directory" component={MentorsDirectory} />
          <Route exact path="/forgot_password" component={ForgotPasswordForm} />
          <Route exact path="/unathorised" component={RedirectPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = ({ auth }) => ({ auth });
export default connect(mapStateToProps, null)(App);

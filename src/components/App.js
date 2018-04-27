import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { currentUser } from "../actions/get_requests";
import React, { Component } from "react";
import Landing from "./Landing/Landing";
import SignupForm from "./SignUp/Sign_up_form";
import LoginForm from "./LogIn/Login_form";
import MentorDashboard from "./MentorDashboard/MentorDashboard";
import MenteeDashboard from "./MenteeDashboard/MenteeDashboard";
import MentorProfile from "./MentorProfile/MentorProfile";
import MenteeProfile from "./MenteeProfile/MenteeProfile";
import MentorProfileForm from "./MentorProfile/MentorProfileForm";
import RedirectPage from "./redirect";

class App extends Component {
  componentDidMount() {
    this.props.currentUser();
  }

  isMentor = () => this.props.auth.accountType === "Mentor";
  isMentee = () => this.props.auth.accountType === "Mentee";

  renderMentorDashboard = () => {
    const loggedIn = this.props.auth;
    const hasAccess = loggedIn && this.isMentor();
    const renderPage = props => <MentorDashboard {...props} />;
    return this.renderProtected({ hasAccess, renderPage });
  };

  renderMenteeDashboard = () => {
    const loggedIn = this.props.auth;
    const hasAccess = loggedIn && this.isMentee();
    const renderPage = props => <MenteeDashboard {...props} />;
    return this.renderProtected({ hasAccess, renderPage });
  };

  renderMentorProfile = () => {
    const loggedIn = this.props.auth;
    const hasAccess = loggedIn && this.isMentor();
    const renderPage = props => <MentorProfile {...props} />;
    return this.renderProtected({ hasAccess, renderPage });
  };
  renderProtected = ({ hasAccess, renderPage }) => {
    return props =>
      hasAccess ? renderPage(props) : <RedirectPage {...props} />;
  };

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/:id/mentor/dashboard"
            render={this.renderMentorDashboard()}
          />
          <Route exact path="/" component={Landing} />
          <Route exact path="/signup_form" component={SignupForm} />
          <Route exact path="/login_form" component={LoginForm} />
          <Route
            exact
            path="/:id/mentee/dashboard"
            render={this.renderMenteeDashboard()}
          />
          <Route
            exact
            path="/:id/mentor/my_profile"
            render={this.renderMentorProfile()}
          />
          <Route
            exact
            path="/:id/mentee/my_profile"
            component={MenteeProfile}
          />
          <Route
            exact
            path="/:id/mentor/my_profile/edit"
            component={MentorProfileForm}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = ({ auth }) => ({ auth });
export default connect(mapStateToProps, { currentUser })(App);

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
import MentorProfileForm from "./MentorProfile/MentorProfileForm";
import RedirectPage from "./redirect";

class App extends Component {
  componentDidMount() {
    this.props.currentUser();
  }

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
            component={this.renderMenteePages(MenteeProfile)}
          />
          <Route
            exact
            path="/:id/mentor/my_profile/edit"
            component={this.renderMentorPages(MentorProfileForm)}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = ({ auth }) => ({ auth });
export default connect(mapStateToProps, { currentUser })(App);

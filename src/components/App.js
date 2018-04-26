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

class App extends Component {
  componentDidMount() {
    this.props.currentUser();
  }
  render() {
    const loggedIn = this.props.auth;
    console.log("LOGGED IN: ", loggedIn);
    if (loggedIn === null) return <div />;
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/:id/mentor/dashboard"
            render={props =>
              loggedIn ? (
                <MentorDashboard {...props} />
              ) : (
                <Redirect to="/login_form" />
              )
            }
          />
          <Route exact path="/" component={Landing} />
          <Route exact path="/signup_form" component={SignupForm} />
          <Route exact path="/login_form" component={LoginForm} />
          <Route
            exact
            path="/:id/mentee/dashboard"
            component={MenteeDashboard}
          />
          <Route
            exact
            path="/:id/mentor/my_profile"
            component={MentorProfile}
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

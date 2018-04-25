import { BrowserRouter, Switch, Route } from "react-router-dom";

import React, { Component } from "react";
import Landing from "./Landing/Landing";
import SignupForm from "./SignUp/Sign_up_form";
import LoginForm from "./LogIn/Login_form";
import MentorDashboard from "./MentorDashboard/MentorDashboard";
import MenteeDashboard from "./MenteeDashboard/MenteeDashboard";
import MentorProfile from "./MentorProfile/MentorProfile";
import MentorProfileForm from "./MentorProfile/MentorProfileForm";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/signup_form" component={SignupForm} />
          <Route exact path="/login_form" component={LoginForm} />
          <Route
            exact
            path="/:id/mentor/dashboard"
            component={MentorDashboard}
          />
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
            path="/:id/mentor/my_profile/edit"
            component={MentorProfileForm}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;

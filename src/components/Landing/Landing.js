import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <div>
        <h1>Practise </h1>
        <Link to="/signup_form"> Sign up </Link>
        <Link to="/login_form"> Log in </Link>
      </div>
    );
  }
}

export default Landing;

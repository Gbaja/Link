import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <div>
        <h1>Young & Giving </h1>
        <p>
          <Link to="/signup_form"> Sign up</Link>
        </p>
        <p>
          <Link to="/login_form"> Log in </Link>
        </p>
      </div>
    );
  }
}

export default Landing;

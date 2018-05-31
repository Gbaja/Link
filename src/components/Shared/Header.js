import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Logo from "../Assets/Logo.png";
import LogoutButton from "./Logout";

class Header extends Component {
  render() {
    return (
      <div>
        <img src={Logo} style={{ width: "200px", height: "200px" }} />
        {this.props.auth ? (
          <div>
            <LogoutButton />
          </div>
        ) : (
          <div>
            {" "}
            <Link to="/signup_form">Sign up</Link> <Link to="/">Log in</Link>
          </div>
        )}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, null)(Header);

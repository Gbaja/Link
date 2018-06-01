import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Logo from "../Assets/Logo.png";
import LogoutButton from "./Logout";
import { ContainerDiv, ButtonsContainerDiv } from "./Header.Styled";
import { FormsSubmitButton } from "./Shared.styled";

class Header extends Component {
  render() {
    return (
      <ContainerDiv>
        <img src={Logo} style={{ width: "120px", height: "120px" }} />
        {this.props.auth ? (
          <ButtonsContainerDiv>
            <LogoutButton />
          </ButtonsContainerDiv>
        ) : (
          <ButtonsContainerDiv>
            {" "}
            <FormsSubmitButton>
              <Link to="/signup_form">Sign up</Link>
            </FormsSubmitButton>{" "}
            <FormsSubmitButton>
              <Link to="/">Log in</Link>
            </FormsSubmitButton>
          </ButtonsContainerDiv>
        )}
      </ContainerDiv>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, null)(Header);

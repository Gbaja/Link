import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { resetError } from "../../actions/post_requests";
import LoginForm from "../LogIn/LoginContainer";
import { FormsSubmitButton } from "../Shared/Shared.styled";

import {
  ContainerDiv,
  ContentContainerDiv,
  ContainerTextDiv,
  ContainerFormDiv,
  ContainerFormTextDiv,
  ContainerOrP
} from "./Landing.styled";
import Alert from "../Shared/Alert";

class Landing extends Component {
  componentWillUnmount() {
    this.props.resetError();
  }

  render() {
    const { alert } = this.props;
    return (
      <ContainerDiv>
        {alert && <Alert alert={alert} />}
        <ContentContainerDiv>
          <ContainerTextDiv>
            <h1>Young & Giving University </h1>
            <p>
              {" "}
              The Young & Giving platform facilitates mentoring relationships
              that work.
            </p>
            <p>
              {" "}
              You can also find industry groups events and a job board on the
              platform.
            </p>
            <p> Sign up today!</p>
          </ContainerTextDiv>
          <ContainerFormDiv>
            <LoginForm />
            <ContainerFormTextDiv>
              <ContainerOrP>OR</ContainerOrP>
              <p>Log in with social</p>
              <p>
                <i className="fab fa-linkedin-in" />
              </p>
              <p>
                By clicking submit, you agree to Young & Giving's Terms of
                Service and Privacy Policy
              </p>
              <p>
                <FormsSubmitButton>
                  <Link to="/signup_form">Sign up</Link>
                </FormsSubmitButton>
                <FormsSubmitButton>
                  <Link to="/forgot_password">Forgot password</Link>
                </FormsSubmitButton>
              </p>
            </ContainerFormTextDiv>
          </ContainerFormDiv>
        </ContentContainerDiv>
      </ContainerDiv>
    );
  }
}
const mapStateToProps = state => ({
  alert: state.alert
});

export default connect(mapStateToProps, { resetError })(Landing);

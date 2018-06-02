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
  Headingh1,
  TextP,
  LinksP,
  Links
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
          <ContainerTextDiv id="content">
            <Headingh1>Young & Giving University </Headingh1>
            <TextP>
              {" "}
              The Young & Giving platform facilitates mentoring relationships
              that work.
            </TextP>
            <TextP>
              {" "}
              You can also find industry groups events and a job board on the
              platform.
            </TextP>
            <TextP> Sign up today!</TextP>
          </ContainerTextDiv>
          <ContainerFormDiv>
            <LoginForm />
            <div>
              <LinksP>
                Don't have an account? <Links to="/signup_form">Sign up</Links>
              </LinksP>
              <LinksP>
                <Links to="/forgot_password">Forgot password?</Links>
              </LinksP>
            </div>
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

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { deleteAccount } from "../../actions/delete_requests";
import { DashboardDeleteButton, DashboardDeleteDiv } from "./Dashboard.Styled";

class DeleteButton extends Component {
  deleteAccount = data => () => {
    const body = {
      email: data
    };
    console.log(body);
    this.props.deleteAccount(body).then(res => {
      console.log(res);
      this.props.history.push("/");
    });
  };

  render() {
    return (
      <DashboardDeleteDiv>
        <DashboardDeleteButton
          onClick={this.deleteAccount(this.props.auth.email)}
        >
          Delete account
        </DashboardDeleteButton>
      </DashboardDeleteDiv>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.auth
});

export default withRouter(
  connect(mapStateToProps, { deleteAccount })(DeleteButton)
);

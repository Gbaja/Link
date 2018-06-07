import React, { Component } from "react";

import Header from "../components/Shared/Header";
import { FormsSubmitButton } from "./Shared/Shared.styled";

class RedirectPage extends Component {
  goBackBtn = () => {
    this.props.history.goBack();
  };
  render() {
    return (
      <div>
        <Header />
        <h1>Unauthorised user </h1>
        <FormsSubmitButton onClick={this.goBackBtn}>Go back</FormsSubmitButton>
      </div>
    );
  }
}

export default RedirectPage;

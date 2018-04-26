import React, { Component } from "react";
import { Link } from "react-router-dom";
import LogOutBtn from "../logout";

class MenteeDashboard extends Component {
  render() {
    return (
      <div>
        <h1>Mentee Dashboard</h1>
        <LogOutBtn />
        <Link to={`/${this.props.match.params.id}/mentee/my_profile`}>
          My profile
        </Link>
      </div>
    );
  }
}

export default MenteeDashboard;

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { resetError } from "../../actions/post_requests";

class Landing extends Component {
  componentWillUnmount() {
    this.props.resetError();
  }

  render() {
    const { alert } = this.props;
    return (
      <div>
        <h1>Young & Giving </h1>
        {alert && <p>{alert}</p>}
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
const mapStateToProps = state => ({
  alert: state.alert
});

export default connect(mapStateToProps, { resetError })(Landing);

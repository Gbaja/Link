import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { fetchProfile } from "../../actions/get_requests";
import Header from "../Shared/Header";
import { FormsSubmitButton } from "../Shared/Shared.styled";
import DisplayProfile from "./DisplayProfile";
import Loading from "../Shared/Loading";

class IndividualProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
  }
  componentDidMount() {
    const { id, accountType } = this.props.match.params;
    this.setState({ loading: true });
    this.props.fetchProfile(id, accountType);
  }

  componentDidUpdate(prevProps) {
    if (this.props.profile !== prevProps.profile) {
      this.setState({ loading: false });
    }
  }

  goBackBtn = () => {
    this.props.history.goBack();
  };
  render() {
    console.log(this.props.profile);
    return (
      <div>
        <Header />
        <FormsSubmitButton onClick={this.goBackBtn}>
          <p>Go back</p>
        </FormsSubmitButton>
        {this.state.loading ? (
          <Loading />
        ) : (
          <DisplayProfile
            profile={this.props.profile}
            user={this.props.auth.accountType}
            accountType={this.props.match.params.accountType}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  {
    fetchProfile
  }
)(IndividualProfilePage);

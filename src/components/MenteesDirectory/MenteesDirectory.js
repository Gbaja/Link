import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { fetchMentees } from "../../actions/get_requests";
import LogOutBtn from "../logout";

class MenteesDirectory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0,
      numberOfPages: []
    };
  }
  componentDidMount() {
    this.props.fetchMentees(1).then(data => {
      console.log("DATA: ", data);
      this.setPageNumbers(this.props.mentees.count);
    });
  }
  setPageNumbers = number => {
    let total = Math.ceil(number / 1);
    let arr = [];
    while (total > 0) {
      arr.unshift(total--);
    }
    this.setState({ numberOfPages: arr });
  };

  showPage = pageNum => () => {
    this.props.fetchMentees(pageNum);
  };

  render() {
    if (Object.getOwnPropertyNames(this.props.mentees).length === 0) {
      console.log("NONE");
      return <div>Loading</div>;
    } else {
      this.props.mentees.count;
      const menteesDetails = this.props.mentees.rows;
      return (
        <div>
          <h1>People</h1>
          {menteesDetails.map(data => {
            return (
              <div key={data.id}>
                <p>
                  {" "}
                  Name : {data.firstName} {data.lastName}
                </p>
                <p> University: {data.universityName}</p>
                <p>Location: {data.location}</p>
                <p>Industry I need a mentor from {data.mentorIndustry}</p>
                <p>
                  <Link to={`profile/${data.accountType}/${data.id}`}>
                    {" "}
                    More info
                  </Link>
                </p>
              </div>
            );
          })}
          {this.state.numberOfPages.map(num => {
            return (
              <span key={num} onClick={this.showPage(num)}>
                {num}
              </span>
            );
          })}
        </div>
      );
    }
  }
}
const mapStateToProps = state => ({
  mentees: state.mentees
});

export default connect(mapStateToProps, { fetchMentees })(MenteesDirectory);

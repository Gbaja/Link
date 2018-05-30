import React from "react";
import { Link } from "react-router-dom";

const Directory = props => {
  const data = props.details;
  return data.map(each => {
    return (
      <div key={each.id}>
        <p>
          {each.firstName} {each.lastName}
        </p>
        <p>
          {" "}
          {each.jobTitle} at {each.company}
        </p>
        <p> {each.industry}</p>
        <p>{each.location}</p>
        <p> {each.universityName}</p>
        <p>
          {each.degree} {each.graduationYear}
        </p>
        <Link to={`/profile/${each.accountType}/${each.id}`}>View profile</Link>
      </div>
    );
  });
};

export default Directory;

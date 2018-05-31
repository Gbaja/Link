import React from "react";
import { Link } from "react-router-dom";

const Directory = props => {
  const data = props.details;
  if (data.length === 0) {
    return (
      <div>
        <p>You currently have no "mentors/mentees" in your directory</p>
      </div>
    );
  }
  return (
    <div>
      {data.map(each => {
        return (
          <div key={each.id}>
            {each.imageUrl ? (
              <img src={each.imageUrl} />
            ) : (
              <i className="fas fa-user-alt" />
            )}
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
            <Link to={`/profile/${each.accountType}/${each.id}`}>
              View profile
            </Link>
          </div>
        );
      })}

      {props.numberOfPages.map(num => {
        return (
          <span key={num} onClick={props.showPage(num)}>
            {num}
          </span>
        );
      })}
    </div>
  );
};

export default Directory;

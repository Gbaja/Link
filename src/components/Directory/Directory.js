import React from "react";

import {
  DirectoryDiv,
  ListContainerDiv,
  PageNumbersDiv,
  PersonDiv,
  PersonInfoP,
  PersonImg
} from "./Directory.Styled";
import { FormsSubmitButton, Links } from "../Shared/Shared.styled";

const Directory = props => {
  const data = props.details;
  if (data.length === 0) {
    return (
      <div>
        <p>
          There are currently no mentors/mentees from your university signed up
          to Young & Giving
        </p>
      </div>
    );
  }
  return (
    <DirectoryDiv>
      <ListContainerDiv>
        {data.map(each => {
          return (
            <PersonDiv key={each.id}>
              {each.imageUrl ? (
                <PersonImg src={each.imageUrl} />
              ) : (
                <div>
                  <i
                    style={{
                      width: "100px",
                      height: "100px",
                      marginTop: "20px"
                    }}
                    className="fas fa-user-alt"
                  />
                </div>
              )}
              <PersonInfoP>
                {each.firstName} {each.lastName}
              </PersonInfoP>
              <PersonInfoP>
                {" "}
                {each.jobTitle}, {each.company}
              </PersonInfoP>
              <PersonInfoP> {each.industry}</PersonInfoP>
              <PersonInfoP>{each.location}</PersonInfoP>
              <PersonInfoP>
                {each.degree}, {each.graduationYear}
              </PersonInfoP>
              <FormsSubmitButton>
                <Links to={`/profile/${each.accountType}/${each.id}`}>
                  View profile
                </Links>
              </FormsSubmitButton>
            </PersonDiv>
          );
        })}
      </ListContainerDiv>
      <PageNumbersDiv>
        Pages
        {props.numberOfPages.map(num => {
          return (
            <span key={num} onClick={props.showPage(num)}>
              {num}
            </span>
          );
        })}
      </PageNumbersDiv>
    </DirectoryDiv>
  );
};

export default Directory;

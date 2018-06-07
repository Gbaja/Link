import styled from "styled-components";

import { Link } from "react-router-dom";

export const ProfileContainerDiv = styled.div`
  background-color: #f6f6f6;
`;
export const ProfileSubContainerDiv = styled.div`
  margin: 0 auto;
  width: 80%;
`;
export const ProfileNameH1 = styled.h1`
  text-align: center;
  padding: 1rem 0;
`;

export const ProfileImageDiv = styled.div`
  display: block;
  text-align: center;
  margin-bottom: 1rem;
`;
export const ProfileImg = styled.img`
  width: 200px;
  height: 200px;
`;
export const ProfileHeadingH3 = styled.h3`
  text-align: center;
  text-decoration: underline;
  font-weight: bold;
  @media screen and (min-width: 900px) {
    font-size: 1.4rem;
  }
`;

export const ProfileWhatP = styled.p`
  color: lightgray;
  font-weight: bold;
  padding-top: 0.2rem;
  @media screen and (min-width: 900px) {
    font-size: 1.3rem;
  }
`;

export const ProfileTextP = styled.p`
  padding: 0.3rem 0;
  @media screen and (min-width: 900px) {
    font-size: 1.3rem;
  }
`;

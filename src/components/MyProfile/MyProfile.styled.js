import styled from "styled-components";

import { Link } from "react-router-dom";

import BackGroundPic from "../Assets/bg.jpg";

export const ContainerDiv = styled.div`
  background-image: url(${BackGroundPic});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;
  overflow: auto;
`;

export const SubContainerDiv = styled.div`
  width: 90%;
  margin: 0 auto;
  background-color: white;
  padding: 1.5rem;
  margin: 1.5rem auto;
  border-radius: 1rem;
  @media screen and (min-width: 700px) {
    width: 50%;
  }
`;

export const ProfileImg = styled.img`
  display: block;
  width: 150px;
  height: 150px;
  margin: 0 auto;
`;

export const ProfileAltImageDiv = styled.div`
  display: block;
  width: 150px;
  height: 150px;
  margin: 0 auto;
`;

export const ButtonLink = styled(Link)`
  text-decoration: none;
  color: white;
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

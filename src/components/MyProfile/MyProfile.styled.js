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
  width: 50%;
  margin: 0 auto;
  background-color: white;
  padding: 1.5rem;
  margin: 1.5rem auto;
  border-radius: 1rem;
`;

export const ProfileImg = styled.img`
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
  font-size: 1.4rem;
`;

export const ProfileWhatP = styled.p`
  color: lightgray;
  font-size: 1.2rem;
  font-weight: bold;
  padding-top: 0.2rem;
`;

export const ProfileTextP = styled.p`
  padding: 0.3rem 0;
  font-size: 1.3rem;
`;

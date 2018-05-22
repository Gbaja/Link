import styled from "styled-components";
import { Link } from "react-router-dom";
import LandingBackgroundPic from "../LandingBackgroundPic.jpg";

export const SignupContainerDiv = styled.div`
  background-image: url(${LandingBackgroundPic});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100vh;
  overflow: auto;
`;

export const SignupFormDiv = styled.div`
  max-width: 300px;
  margin: 0 auto;
  background-color: white;
  padding: 0 2rem;
  border-radius: 1rem;
  margin-top: 2rem;
`;

export const SignupH1 = styled.h1`
  color: #d3d3d3;
  text-align: center;
  padding: 1rem 0 0 0;
`;

export const SignupLoginP = styled.p`
  color: #e3c800;
  padding-bottom: 0.5rem;
`;

export const SignupLoginA = styled(Link)`
  color: #e3c800;
`;

import styled from "styled-components";
import { Link } from "react-router-dom";
import LandingBackgroundPic from "../Assets/LandingBackgroundPic.jpg";

export const SignupContainerDiv = styled.div`
  background: linear-gradient(rgba(150, 0, 0, 0.45), rgba(150, 0, 0, 0.45)),
    url(${LandingBackgroundPic});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100vh;
  overflow: auto;
`;

export const SignupFormDiv = styled.div`
  width: 80%;
  margin: 0 auto;
  background-color: white;
  padding: 0 2rem;
  border-radius: 1rem;
  margin-top: 2rem;
  @media screen and (min-width: 800px) {
    width: 40%;
  }
`;

export const SignupH1 = styled.h1`
  color: #d3d3d3;
  text-align: center;
  padding: 1rem 0 0 0;
`;

export const SignupLoginP = styled.p`
  color: #e3c800;
  padding-bottom: 0.5rem;
  font-size: 1.3rem;
`;

export const SignupLoginA = styled(Link)`
  color: #e3c800;
  font-size: 1.3rem;
`;

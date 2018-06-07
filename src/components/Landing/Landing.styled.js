import styled from "styled-components";
import { Link } from "react-router-dom";

import LandingBackgroundPic from "../Assets/LandingBackgroundPic.jpg";

export const ContainerDiv = styled.div`
  background: linear-gradient(rgba(150, 0, 0, 0.45), rgba(150, 0, 0, 0.45)),
    url(${LandingBackgroundPic});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100vh;
  overflow: auto;
`;

export const ContentContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 800px) {
    flex-direction: row-reverse;
    justify-content: space-around;
  }
`;

export const ContainerTextDiv = styled.div`
  color: white;
  @media screen and (min-width: 800px) {
    width: 40%;
    margin-right: 1rem;
  }
`;

export const ContainerFormDiv = styled.div`
  margin: 0 auto;
  margin-top: 5rem;
  width: 80%;
  background-color: white;
  border-radius: 1rem 1rem 0 0;
  padding: 0 1rem;

  @media screen and (min-width: 700px) {
    width: 300px;
    height: calc(100vh - 5rem);
  }
`;

export const Headingh1 = styled.h1`
  font-size: 2.5rem;
  margin-top: 3rem;
  text-align: center;
  @media screen and (min-width: 900px) {
    margin: 0;
  }
`;

export const TextP = styled.p`
  margin-top: 1rem;
  font-size: 1.5rem;
  margin-left: 1rem;
  @media screen and (min-width: 900px) {
    margin-left: 0;
  }
`;

export const LinksP = styled.p`
  margin: 2rem 0;
`;
export const Links = styled(Link)`
  color: #e3c800;
  padding-right: 2rem;
`;

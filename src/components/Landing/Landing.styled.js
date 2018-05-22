import styled from "styled-components";
import LandingBackgroundPic from "../LandingBackgroundPic.jpg";

export const ContainerDiv = styled.div`
  background-image: url(${LandingBackgroundPic});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100vh;
`;

export const ContentContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 900px) {
    flex-direction: row-reverse;
    justify-content: space-around;
  }
`;

export const ContainerTextDiv = styled.div`
  color: white;
  @media screen and (min-width: 900px) {
    width: 40%;
  }
`;

export const ContainerFormDiv = styled.div`
  margin-left: 3rem;
  margin-top: 5rem;
  max-width: 300px;
  background-color: white;
  border-radius: 1rem 1rem 0 0;
  padding: 0 1rem;
  height: calc(100vh - 5rem);
`;

export const ContainerFormTextDiv = styled.div`
  text-align: center;
`;

export const ContainerOrP = styled.p`
color: blue;
&:before {
  content:"hey",
  border: 30px solid black;
}
`;

import styled from "styled-components";
import { Link } from "react-router-dom";

export const DashboardHeadingH1 = styled.h1`
  margin-left: 2rem;
`;

export const DashboardContainerDiv = styled.div`
  display: flex;
  width: 80%;
  margin: 0 auto;
  margin-top: 2rem;
  flex-direction: column;
  flex-wrap: wrap;
  @media screen and (min-width: 700px) {
    flex-direction: row;
  }
`;

export const DashboardP = styled.p`
  width: 60%;
  background-color: #e3c800;
  text-align: center;
  margin: 1rem auto;
  padding: 3rem 2rem;
  @media screen and (min-width: 700px) {
    width: 27%;
    margin: 1rem;
  }
`;

export const DashboardDeleteDiv = styled.div`
  width: 60%;
  background-color: #e3c800;
  text-align: center;
  margin: 1rem auto;
  padding: 3rem;
  @media screen and (min-width: 700px) {
    width: 27%;
    margin: 1rem;
  }
`;

export const DashboardDeleteButton = styled.button`
  border: 0;
  background: inherit;
  color: white;
  font-size: 2rem;
  text-align: centre;
  text-decoration: underline;
`;

export const DashboardLinks = styled(Link)`
  color: white;
  font-size: 2rem;
`;

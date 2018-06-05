import styled from "styled-components";
import { Link } from "react-router-dom";

export const FormsSubmitButton = styled.button`
  background-color: #e3c800;
  border: 0;
  color: white;
  padding: 0.5rem;
  width: 110px;
  font-size: 1rem;
  margin: 1rem auto;
  margin-right: 0.3rem;
`;

export const ContainerDiv = styled.div`
  width: 60%;
  margin: 0 auto;
  margin-top: 1rem;
  text-align: center;
`;

export const HeadingH1 = styled.h1`
  margin-bottom: 1rem;
`;

export const Links = styled(Link)`
  color: white;
  text-decoration: none;
`;

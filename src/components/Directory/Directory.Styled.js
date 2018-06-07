import styled from "styled-components";

export const DirectoryContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 900px) {
    flex-direction: row;
  }
`;

export const DirectoryDiv = styled.div`
  width: 80%;
  margin: 0 auto;
`;

export const ListContainerDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  @media screen and (min-width: 900px) {
    flex-direction: row;
  }
`;

export const PageNumbersDiv = styled.div`
  margin: 0 auto;
  text-align: center;
`;

export const PersonDiv = styled.div`
  width: 80%;
  border: 1px solid #e3c800;
  margin: 1rem auto;
  text-align: center;
  @media screen and (min-width: 900px) {
    width: 27%;
    margin: 1rem;
  }
`;

export const PersonInfoP = styled.p`
  padding: 0.3rem;
`;
export const PersonImg = styled.img`
  height: 100px;
  width: 100px;
  margin-top: 20px;
`;

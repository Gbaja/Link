import styled from "styled-components";

export const DirectoryContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f6f6f6;
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
  margin: 2rem auto;
  text-align: center;
`;

export const PersonDiv = styled.div`
  width: 90%;
  margin: 1rem auto;
  text-align: center;
  background-color: white;
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

export const PageNumSpan = styled.span`
  margin: 0 1rem;
  font-size: 1.3rem;
`;

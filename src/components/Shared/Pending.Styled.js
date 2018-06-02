import styled from "styled-components";

export const HeadingH1 = styled.h1`
  margin-left: 2rem;
`;

export const Table = styled.table`
  border-collapse: collapse;
  width: 80%;
  margin: 0 auto;
  margin-top: 1rem;
`;

export const TableDataTH = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #e3c800;
  color: white;
`;

export const TableDataTD = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;

export const TableDataTR = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

import styled from "styled-components";

export const FormsLabel = styled.label`
  display: block;
  padding-top: 0.5rem;
`;

export const FormsInput = styled.input`
  border: 0;
  border-bottom: 1px solid #d3d3d3;
  width: 100%;
`;
export const FormsTextarea = styled.textarea`
  width: 100%;
  height: 80px;
  border: 2px solid #d3d3d3;
  margin-top: 0.5rem;
`;

export const FormsSelect = styled.select`
  margin-top: 0.5rem;
  width: 100%;
  padding-left: 0.5rem;
  border: 1px solid #ccc;
  height: 34px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: url("http://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/br_down.png")
    no-repeat right center;
`;

export const FormsErrorsP = styled.p`
  color: red;
  font-weight: bold;
  padding-top: 0.5rem;
`;

import React from "react";
import { FormsLabel, FormsInput } from "./FormElements.styled";

export const renderFormFields = field => {
  const {
    meta: { touched, error }
  } = field;
  switch (true) {
  case field.textarea:
    console.log("MATCHED TEXTAREA: ", field.textarea);
    return (
      <div>
        <FormsLabel>{field.label}</FormsLabel>
        <textarea {...field.input} />
        <p>{touched ? error : ""}</p>
      </div>
    );
  case field.type === "checkbox":
    return (
      <div>
        <FormsLabel>
          <input type="checkbox" {...field.input} />
          {field.label}
        </FormsLabel>
        <p>{touched ? error : ""}</p>
      </div>
    );
  case field.select === true:
    return (
      <div>
        <FormsLabel>{field.label}</FormsLabel>
        <select {...field.input}>
          {Object.keys(field.options).map(val => {
            return (
              <option key={val} value={val}>
                {field.options[val]}
              </option>
            );
          })}
        </select>
        <p>{touched ? error : ""}</p>
      </div>
    );
  default:
    return (
      <div>
        {field.label && <FormsLabel>{field.label}</FormsLabel>}
        <FormsInput type={field.type} {...field.input} />
        <p>{touched ? error : ""}</p>
      </div>
    );
  }
};

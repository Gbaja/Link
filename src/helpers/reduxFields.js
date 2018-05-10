import React from "react";

export const renderFormFields = field => {
  const {
    meta: { touched, error }
  } = field;
  switch (true) {
  case field.textarea:
    console.log("MATCHED TEXTAREA: ", field.textarea);
    return (
      <div>
        <label>{field.label}</label>
        <textarea {...field.input} />
        <p>{touched ? error : ""}</p>
      </div>
    );
  case field.type === "checkbox":
    return (
      <div>
        <label>
          <input type="checkbox" {...field.input} />
          {field.label}
        </label>
        <p>{touched ? error : ""}</p>
      </div>
    );
  case field.select === true:
    return (
      <div>
        <label>{field.label}</label>
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
        {field.label && <label>{field.label}</label>}
        <input type={field.type} {...field.input} />
        <p>{touched ? error : ""}</p>
      </div>
    );
  }
};

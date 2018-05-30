import React from "react";
import {
  FormsLabel,
  FormsInput,
  FormsTextarea,
  FormsErrorsP,
  FormsSelect
} from "./FormElements.styled";

export const renderFormFields = field => {
  const {
    meta: { touched, error }
  } = field;
  switch (true) {
  case field.textarea:
    return (
      <div>
        <FormsLabel>{field.label}</FormsLabel>
        <FormsTextarea {...field.input} />
        <FormsErrorsP>{touched ? error : ""}</FormsErrorsP>
      </div>
    );
  case field.type === "checkbox":
    return (
      <div>
        <FormsLabel>
          <input type="checkbox" {...field.input} />
          {field.label}
        </FormsLabel>
        <FormsErrorsP>{touched ? error : ""}</FormsErrorsP>
      </div>
    );
  case field.select === true:
    return (
      <div>
        <FormsLabel>{field.label}</FormsLabel>
        <FormsSelect {...field.input}>
          {Object.keys(field.options).map(val => {
            return (
              <option key={val} value={val}>
                {field.options[val]}
              </option>
            );
          })}
        </FormsSelect>
        <FormsErrorsP>{touched ? error : ""}</FormsErrorsP>
      </div>
    );
  default:
    return (
      <div>
        {field.label && <FormsLabel>{field.label}</FormsLabel>}
        <FormsInput type={field.type} {...field.input} />
        <FormsErrorsP>{touched ? error : ""}</FormsErrorsP>
      </div>
    );
  }
};

const adaptFileEventToValue = delegate => e => delegate(e.target.files[0]);

export const renderFileInput = ({
  input: { value: omitValue, onChange, onBlur, ...inputProps },
  meta: omitMeta,
  ...props
}) => {
  const { touched, error } = omitMeta;
  return (
    <div>
      <label>Upload picture</label>

      <input
        onChange={adaptFileEventToValue(onChange)}
        onBlur={adaptFileEventToValue(onBlur)}
        type="file"
        id="imageUrl"
        accept="image/*"
        {...props.input}
        {...props}
      />
      <p>{touched ? error : ""}</p>
    </div>
  );
};

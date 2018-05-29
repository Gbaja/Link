import React from "react";
import { AlertErrorP, AlertSuccessP } from "./Alert.styled";

const Alert = props => {
  const alert = props.alert;
  return (
    <div>
      {alert.type === "error" ? (
        <AlertErrorP>{alert.message}</AlertErrorP>
      ) : alert.type === "success" ? (
        <AlertSuccessP>{alert.message}</AlertSuccessP>
      ) : (
        <p />
      )}
    </div>
  );
};

export default Alert;

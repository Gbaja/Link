import React from "react";

const Alert = props => {
  const alert = props.alert;
  return (
    <div>
      {alert.type === "error" ? (
        <p>{alert.message}</p>
      ) : alert.type === "success" ? (
        <p>{alert.message}</p>
      ) : (
        <p />
      )}
    </div>
  );
};

export default Alert;

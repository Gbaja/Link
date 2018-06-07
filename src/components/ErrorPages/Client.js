import React from "react";
import ErrorImage from "../Assets/errorimage.png";
import Header from "../Shared/Header";
import { Links } from "../Shared/Shared.styled";

const ClientError = () => {
  return (
    <div>
      <Header />
      <h1>Page not found</h1>
      <img src={`${ErrorImage}`} alt="Error" />
    </div>
  );
};

export default ClientError;

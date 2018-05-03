import axios from "axios";

import { UNAUTH_USER, CURRENT_USER } from "./types";

export const logOut = callback => {
  return dispatch => {
    axios.get("/api/logout").then(() => callback());
    dispatch({
      type: UNAUTH_USER,
      payload: false
    });
  };
};

export const currentUser = () => {
  return dispatch => {
    axios
      .get("/api/currentUser")
      .then(response => {
        console.log("API CALL CURRET USER: ", response.data);
        dispatch({
          type: CURRENT_USER,
          payload: response.data === "" ? null : response.data
        });
      })
      .catch(err => {
        console.log("CURRENT USER ERROR: ", err);
      });
  };
};

import axios from "axios";

import { UNAUTH_USER, USER_PROFILE } from "./types";

export const logOut = callback => {
  return dispatch => {
    axios.get("/api/logout").then(() => callback());
    dispatch({
      type: UNAUTH_USER,
      payload: false
    });
  };
};

export const myProfile = userId => {
  return dispatch => {
    axios
      .get(`/api/myprofile/${userId}`)
      .then(response => {
        console.log("ACTION CREATOR: ", response.data);
        dispatch({
          type: USER_PROFILE,
          payload: response.data
        });
      })
      .catch(err => {
        console.log("FETCH PROFILE ERROR: ", err);
      });
  };
};

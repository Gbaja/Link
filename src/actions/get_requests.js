import axios from "axios";

import {
  UNAUTH_USER,
  MENTOR_PROFILE,
  MENTEE_PROFILE,
  CURRENT_USER
} from "./types";

export const logOut = callback => {
  return dispatch => {
    axios.get("/api/logout").then(() => callback());
    dispatch({
      type: UNAUTH_USER,
      payload: false
    });
  };
};

export const mentorProfile = userId => {
  return dispatch => {
    axios
      .get(`/api/mentorProfile/${userId}`)
      .then(response => {
        console.log("ACTION CREATOR: ", response.data);
        dispatch({
          type: MENTOR_PROFILE,
          payload: response.data
        });
      })
      .catch(err => {
        console.log("FETCH PROFILE ERROR: ", err);
      });
  };
};

export const menteeProfile = userId => {
  return dispatch => {
    axios
      .get(`/api/menteeProfile/${userId}`)
      .then(response => {
        console.log("ACTION CREATOR: ", response.data);
        dispatch({
          type: MENTEE_PROFILE,
          payload: response.data
        });
      })
      .catch(err => {
        console.log("FETCH PROFILE ERROR: ", err);
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

import axios from "axios";

import { ADD_ERROR, UNAUTH_USER, FETCH_MENTORS } from "./types";

export const logOut = callback => {
  return dispatch => {
    axios.get("/api/logout").then(() => callback());
    dispatch({
      type: UNAUTH_USER,
      payload: false
    });
  };
};

export const fetchMentors = pageNum => {
  return dispatch => {
    return axios
      .get(`/api/getMentors/${pageNum}`)
      .then(response => {
        dispatch({
          type: FETCH_MENTORS,
          payload: response.data
        });
      })
      .catch(err => {
        console.log("FETCH MENTORS ERR: ", err);
        dispatch({
          type: ADD_ERROR,
          payload:
            "There was an error on our side. Please try again letter or contact a member of out team for assistance."
        });
      });
  };
};

import axios from "axios";

import {
  ADD_ERROR,
  UNAUTH_USER,
  FETCH_MENTORS,
  FETCH_MENTEES,
  FETCH_PROFILE
} from "./types";

export const logOut = callback => {
  return dispatch => {
    axios.get("/api/logout").then(() => {
      callback();
      dispatch({
        type: UNAUTH_USER,
        payload: false
      });
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

export const fetchMentees = pageNum => {
  return dispatch => {
    return axios
      .get(`/api/getMentees/${pageNum}`)
      .then(response => {
        dispatch({
          type: FETCH_MENTEES,
          payload: response.data
        });
      })
      .catch(err => {
        console.log("FETCH MENTEES ERR: ", err);
        dispatch({
          type: ADD_ERROR,
          payload:
            "There was an error on our side. Please try again letter or contact a member of out team for assistance."
        });
      });
  };
};

export const fetchProfile = (id, accountType) => {
  return dispatch => {
    return axios
      .get(`/api/profile/${id}/${accountType}`)
      .then(response => {
        dispatch({
          type: FETCH_PROFILE,
          payload: response.data
        });
      })
      .catch(err => {
        console.log("FETCH PROFILE ERR: ", err);
        dispatch({
          type: ADD_ERROR,
          payload:
            "There was an error on our side. Please try again letter or contact a member of out team for assistance."
        });
      });
  };
};

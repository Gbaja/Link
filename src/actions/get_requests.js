import axios from "axios";

import {
  ADD_ERROR,
  UNAUTH_USER,
  FETCH_DIRECTORY,
  FETCH_PROFILE,
  FETCH_UNIVERSITIES
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

export const fetchDirectory = (pageNum, accountType, uni) => {
  return dispatch => {
    return axios
      .get(`/api/directory/${pageNum}/${accountType}/${uni}`)
      .then(response => {
        dispatch({
          type: FETCH_DIRECTORY,
          payload: response.data
        });
      })
      .catch(err => {
        console.log("FETCH MENTORS ERR: ", err);
        dispatch({
          type: ADD_ERROR,
          payload: {
            type: "error",
            message:
              "There was an error on our side. Please try again letter or contact a member of out team for assistance."
          }
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
          payload: {
            type: "error",
            message:
              "There was an error on our side. Please try again letter or contact a member of out team for assistance."
          }
        });
      });
  };
};

export const fetchUniversities = () => {
  return dispatch => {
    return axios
      .get("api/allUni")
      .then(response => {
        dispatch({
          type: FETCH_UNIVERSITIES,
          payload: response.data
        });
      })
      .catch(err => {
        console.log("FETCH PROFILE ERR: ", err);
        dispatch({
          type: ADD_ERROR,
          payload: {
            type: "error",
            message:
              "There was an error on our side. Please try again letter or contact a member of out team for assistance."
          }
        });
      });
  };
};

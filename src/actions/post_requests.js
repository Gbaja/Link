import axios from "axios";
import { AUTH_USER, ADD_ERROR, RESET_ERROR } from "./types";

export const signupMentor = (data, callback) => {
  return dispatch => {
    axios
      .post("/api/signupMentor", data)
      .then(res => callback(res.data))
      .then(() => {
        dispatch({
          type: AUTH_USER,
          payload: true
        });
      })
      .catch(err => {
        if (err.message.includes("422")) {
          dispatch({
            type: ADD_ERROR,
            payload: err.response.data
          });
        } else {
          dispatch({
            type: ADD_ERROR,
            payload: "Server error"
          });
        }
      });
  };
};
export const signupMentee = (data, callback) => {
  return dispatch => {
    axios
      .post("/api/signupMentee", data)
      .then(res => callback(res.data))
      .then(() => {
        dispatch({
          type: AUTH_USER,
          payload: true
        });
      })
      .catch(err => {
        if (err.message.includes("422")) {
          dispatch({
            type: ADD_ERROR,
            payload: err.response.data
          });
        } else {
          dispatch({
            type: ADD_ERROR,
            payload: "Server error"
          });
        }
      });
  };
};

export const logIn = (data, callback) => {
  return dispatch => {
    axios
      .post("/api/logIn", data)
      .then(res => {
        callback(res.data);
      })
      .then(() => {
        console.log("HHAH");
        dispatch({
          type: AUTH_USER,
          payload: true
        });
      })
      .catch(err => {
        if (err.message.includes("422")) {
          dispatch({
            type: ADD_ERROR,
            payload: err.response.data
          });
        } else {
          dispatch({
            type: ADD_ERROR,
            payload: "Server error"
          });
        }
      });
  };
};

export const resetError = () => {
  return {
    type: RESET_ERROR
  };
};

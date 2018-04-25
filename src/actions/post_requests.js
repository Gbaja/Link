import axios from "axios";
import { AUTH_USER, ADD_ERROR } from "./types";

export const signUp = (data, callback) => {
  return dispatch => {
    axios
      .post("/api/signUp", data)
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

import axios from "axios";
import { AUTH_USER, ADD_ERROR, RESET_ERROR, ADD_SUCCESS } from "./types";

export const signupMentor = (data, callback) => {
  return dispatch => {
    axios
      .post("/api/signupMentor", data)
      .then(res => {
        dispatch({
          type: AUTH_USER,
          payload: res.data
        });
        //console.log("AFTER DISPATCH");
        callback(res.data);
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
      .then(res => {
        dispatch({
          type: AUTH_USER,
          payload: res.data
        });
        //console.log("AFTER DISPATCH");
        callback(res.data);
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
        dispatch({
          type: AUTH_USER,
          payload: res.data
        });
        //console.log("AFTER DISPATCH");
        callback(res.data);
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

export const forgotPassword = data => {
  return dispatch => {
    axios.post("/api/forgotPassword", data).then(res => {
      dispatch({
        type: ADD_SUCCESS,
        payload: res.data
      });
    });
  };
};

export const resetPassword = data => {
  return dispatch => {
    axios.post("/api/resetPassword", data).then(res => {
      dispatch({
        type: ADD_SUCCESS,
        payload: res.data
      });
    });
  };
};

export const resetError = () => {
  return {
    type: RESET_ERROR
  };
};

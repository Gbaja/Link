import axios from "axios";
import { AUTH_USER, ADD_ERROR, RESET_ERROR, ADD_SUCCESS } from "./types";

export const signupMentor = data => {
  return dispatch => {
    return axios
      .post("/api/signupMentor", data)
      .then(res => {
        dispatch({
          type: ADD_SUCCESS,
          payload: res.data
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
            payload: {
              type: "error",
              message:
                "There was an error on our side. Please try again letter or contact a member of out team for assistance."
            }
          });
        }
      });
  };
};
export const signupMentee = (data, callback) => {
  return dispatch => {
    return axios
      .post("/api/signupMentee", data)
      .then(res => {
        dispatch({
          type: AUTH_USER,
          payload: res.data
        });
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
            payload: {
              type: "error",
              message:
                "There was an error on our side. Please try again letter or contact a member of out team for assistance."
            }
          });
        }
      });
  };
};

export const logIn = (data, callback) => {
  return dispatch => {
    return axios
      .post("/api/login", data)
      .then(res => {
        console.log("LOG IN RES: ", res.data);
        dispatch({
          type: AUTH_USER,
          payload: res.data
        });
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
            payload: {
              type: "error",
              message: {
                type: "error",
                message:
                  "There was an error on our side. Please try again letter or contact a member of out team for assistance."
              }
            }
          });
        }
      });
  };
};

export const addUni = data => {
  return dispatch => {
    return axios
      .post("/api/newUni", data)
      .then(res => {
        dispatch({
          type: ADD_SUCCESS,
          payload: res.data
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
            payload: {
              type: "error",
              message:
                "There was an error on our side. Please try again letter or contact a member of out team for assistance."
            }
          });
        }
      });
  };
};

export const requestMentorship = data => {
  return dispatch => {
    axios
      .post("/api/requestMentorship", data)
      .then(res => {
        dispatch({
          type: ADD_SUCCESS,
          payload: res.data
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
            payload: {
              type: "error",
              message:
                "There was an error on our side. Please try again letter or contact a member of out team for assistance."
            }
          });
        }
      });
  };
};

export const forgotPassword = data => {
  return dispatch => {
    axios
      .post("/api/forgotPassword", data)
      .then(res => {
        console.log(res.data);
        dispatch({
          type: ADD_SUCCESS,
          payload: res.data
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
            payload: {
              type: "error",
              message:
                "There was an error on our side. Please try again letter or contact a member of out team for assistance."
            }
          });
        }
      });
  };
};

export const resetPassword = data => {
  return dispatch => {
    axios
      .post("/api/resetPassword", data)
      .then(res => {
        dispatch({
          type: ADD_SUCCESS,
          payload: res.data
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
            payload: {
              type: "error",
              message:
                "There was an error on our side. Please try again letter or contact a member of out team for assistance."
            }
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

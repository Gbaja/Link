import axios from "axios";

import { UPDATE_PROFILE, ADD_ERROR } from "./types";

export const updateMentee = (data, callback) => {
  return dispatch => {
    axios
      .put("/api/updateMenteeProfile/:id", data)
      .then(response => {
        dispatch({
          type: UPDATE_PROFILE,
          payload: response.data
        });
        callback(response.data);
      })
      .catch(err => {
        dispatch({
          type: ADD_ERROR,
          payload: err
        });
      });
  };
};

export const updateMentor = (data, callback) => {
  return dispatch => {
    axios
      .put("/api/updateMentorProfile/:id", data)
      .then(response => {
        dispatch({
          type: UPDATE_PROFILE,
          payload: response.data
        });
        callback(response.data);
      })
      .catch(err => {
        dispatch({
          type: ADD_ERROR,
          payload: err
        });
      });
  };
};

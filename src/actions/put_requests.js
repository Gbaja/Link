import axios from "axios";

import { ADD_ERROR, UPDATE_PROFILE } from "./types";

export const updateProfile = (data, url, callback) => {
  return dispatch => {
    axios
      .put(url, data)
      .then(response => {
        dispatch({
          type: UPDATE_PROFILE,
          payload: response.data
        });
        callback(response.data);
      })
      .catch(err => {
        console.log("UPDATE PROFILE ERROR: ", err);
        dispatch({
          type: ADD_ERROR,
          payload:
            "There was an error on our side. Please try again letter or contact a member of out team for assistance."
        });
      });
  };
};

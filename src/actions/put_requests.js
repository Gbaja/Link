import axios from "axios";

import { UPDATE_PROFILE } from "./types";

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
      });
  };
};

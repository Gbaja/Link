import axios from "axios";

import { ADD_SUCCESS, ADD_ERROR } from "./types";

export const deleteAccount = data => {
  return dispatch => {
    axios
      .post("/api/delete", data)
      .then(res => {
        dispatch({
          type: ADD_SUCCESS,
          payload: res.data
        });
      })
      .catch(err => {
        dispatch({
          type: ADD_ERROR,
          payload:
            "There was an error on our side. Please try again letter or contact a member of out team for assistance."
        });
      });
  };
};

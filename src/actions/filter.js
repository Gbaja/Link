import { SET_FILTER } from "./types";

export const setFilter = filter => {
  return dispatch => {
    return dispatch({
      type: SET_FILTER,
      payload: filter
    });
  };
};

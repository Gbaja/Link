import { ADD_ERROR, RESET_ERROR, ADD_SUCCESS } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
  case ADD_ERROR:
    return action.payload;
  case ADD_SUCCESS:
    return action.payload;
  case RESET_ERROR:
    return "";
  default:
    return state;
  }
};

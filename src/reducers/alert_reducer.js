import { ADD_ERROR, RESET_ERROR, ADD_SUCCESS } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
  case ADD_ERROR:
    console.log("ERROR: ", action.payload);
    return (state.type = "error");
  case ADD_SUCCESS:
    return action.payload;
  case RESET_ERROR:
    console.log("RESET ERROR REDUCER");
    return "";
  default:
    return state;
  }
};

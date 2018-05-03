import { FETCH_MENTORS } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
  case FETCH_MENTORS:
    console.log("ERROR: ", action.payload);
    return action.payload;
  default:
    return state;
  }
};

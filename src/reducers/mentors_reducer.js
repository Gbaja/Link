import { FETCH_MENTORS } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
  case FETCH_MENTORS:
    return action.payload;
  default:
    return state;
  }
};

import { FETCH_DIRECTORY } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
  case FETCH_DIRECTORY:
    return action.payload;
  default:
    return state;
  }
};

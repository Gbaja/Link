import { FETCH_UNIVERSITIES } from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
  case FETCH_UNIVERSITIES:
    return action.payload;
  default:
    return state;
  }
};

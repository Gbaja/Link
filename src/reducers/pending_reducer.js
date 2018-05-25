import { FETCH_PENDING } from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
  case FETCH_PENDING:
    return action.payload;
  default:
    return state;
  }
};

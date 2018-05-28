import { FETCH_PENDING } from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
  case FETCH_PENDING:
    return [...state, ...action.payload];
  case "USER_ACCEPTED":
    return state.filter(user => {
      return user.id !== action.payload;
    });
  default:
    return state;
  }
};

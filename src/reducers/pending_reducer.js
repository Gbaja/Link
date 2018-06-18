import { FETCH_PENDING } from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_PENDING:
      return [...state, ...action.payload];
    case "USER_ACCEPTED":
      console.log(("STATE: ", state));
      return state.filter(user => {
        return user.email !== action.payload;
      });
    default:
      return state;
  }
};

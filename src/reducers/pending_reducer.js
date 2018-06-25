import { FETCH_PENDING, USER_ACCEPTED } from "../actions/types";

export default (state = [], action) => {
  console.log();
  switch (action.type) {
  case FETCH_PENDING:
    return [...state, ...action.payload];
  case USER_ACCEPTED:
    console.log(("STATE: ", state));
    return state.filter(user => {
      console.log("USER");
      return user.email !== action.payload;
    });
  default:
    return state;
  }
};

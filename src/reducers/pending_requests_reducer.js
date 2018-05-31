import { FETCH_PENDING_REQUESTS } from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
  case FETCH_PENDING_REQUESTS:
    return [...state, ...action.payload];
    //   case "USER_ACCEPTED":
    //     return state.filter(user => {
    //       return user.email !== action.payload;
    //     });
  default:
    return state;
  }
};

import {
  FETCH_PENDING_REQUESTS_MENTOR,
  FETCH_PENDING_REQUESTS_MENTEE
} from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
  case FETCH_PENDING_REQUESTS_MENTOR:
    return [...state, ...action.payload];
  case FETCH_PENDING_REQUESTS_MENTEE:
    return [...state, ...action.payload];
    //   case "USER_ACCEPTED":
    //     return state.filter(user => {
    //       return user.email !== action.payload;
    //     });
  default:
    return state;
  }
};

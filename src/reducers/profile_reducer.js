import { USER_PROFILE } from "../actions/types";

export default function(state = null, action) {
  switch (action.type) {
  case USER_PROFILE:
    if (action.payload) {
      return action.payload;
    }
    return state;
  default:
    return state;
  }
}

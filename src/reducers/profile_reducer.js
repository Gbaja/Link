import { MENTOR_PROFILE, MENTEE_PROFILE } from "../actions/types";

export default function(state = null, action) {
  switch (action.type) {
  case MENTOR_PROFILE:
  case MENTEE_PROFILE:
    if (action.payload) {
      return action.payload;
    }
    return state;
  default:
    return state;
  }
}

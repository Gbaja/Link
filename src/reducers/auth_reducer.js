import {
  AUTH_USER,
  UNAUTH_USER,
  CURRENT_USER,
  UPDATE_PROFILE
} from "../actions/types";

export default (state = null, action) => {
  switch (action.type) {
  case AUTH_USER:
    console.log("AUTH USER: ", action.payload);
    return action.payload;
  case CURRENT_USER:
    return action.payload;
  case UPDATE_PROFILE:
    return action.payload;
  case UNAUTH_USER:
    return false;
  default:
    return state;
  }
};

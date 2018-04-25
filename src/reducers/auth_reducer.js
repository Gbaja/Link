import { AUTH_USER, UNAUTH_USER } from "../actions/types";

export default (state = null, action) => {
  switch (action.type) {
  case AUTH_USER:
    console.log("AUTH USSR: ", action.payload);
    return action.payload;
  case UNAUTH_USER:
    return action.payload;
  default:
    return state;
  }
};

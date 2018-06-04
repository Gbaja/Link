import {
  FETCH_PENDING_REQUESTS_MENTOR,
  FETCH_PENDING_REQUESTS_MENTEE,
  MENTORSHIP_ACTION
} from "../actions/types";

function isRequest(state, data) {
  return state.requestId === data.requestId;
}

export default (state = [], action) => {
  switch (action.type) {
  case FETCH_PENDING_REQUESTS_MENTOR:
    return [...state, ...action.payload];
  case FETCH_PENDING_REQUESTS_MENTEE:
    return [...state, ...action.payload];
  case MENTORSHIP_ACTION:
    return state.reduce((acc, curr) => {
      let toUpdate = curr;
      if (toUpdate.requestId === action.payload.requestId) {
        toUpdate = Object.assign({}, curr, { status: action.payload.status });
      }
      return acc.concat(toUpdate);
    }, []);
  default:
    return state;
  }
};

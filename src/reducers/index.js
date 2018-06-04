import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import alertReducer from "./alert_reducer";
import authReducer from "./auth_reducer";
import directory_reducer from "./directory_reducer";
import profileReducer from "./profile_reducer";
import univesitiesReducer from "./universities_reducer";
import pendingReducer from "./pending_reducer";
import pendingRequestsReducer from "./pending_requests_reducer";
import filterReducer from "./filter_reducer";
import { UNAUTH_USER } from "../actions/types";

const appReducer = combineReducers({
  form: formReducer,
  auth: authReducer,
  alert: alertReducer,
  directory: directory_reducer,
  profile: profileReducer,
  universities: univesitiesReducer,
  pending: pendingReducer,
  pendingRequests: pendingRequestsReducer,
  filter: filterReducer
});

const rootReducer = (state, action) => {
  if (action.type === UNAUTH_USER) {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;

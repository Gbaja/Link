import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import alertReducer from "./alert_reducer";
import authReducer from "./auth_reducer";
import mentorsReducer from "./mentors_reducer";
import menteesReducer from "./mentees_reducer";
import profileReducer from "./profile_reducer";

const rootReducer = combineReducers({
  form: formReducer,
  auth: authReducer,
  alert: alertReducer,
  mentors: mentorsReducer,
  mentees: menteesReducer,
  profile: profileReducer
});

export default rootReducer;

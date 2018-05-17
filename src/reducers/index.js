import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import alertReducer from "./alert_reducer";
import authReducer from "./auth_reducer";
import directory_reducer from "./directory_reducer";
import profileReducer from "./profile_reducer";

const rootReducer = combineReducers({
  form: formReducer,
  auth: authReducer,
  alert: alertReducer,
  directory: directory_reducer,
  profile: profileReducer
});

export default rootReducer;

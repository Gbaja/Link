import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import errorReducer from "./error_reducer";
import authReducer from "./auth_reducer";
import profileReducer from "./profile_reducer";

const rootReducer = combineReducers({
  form: formReducer,
  auth: authReducer,
  error: errorReducer,
  profile: profileReducer
});

export default rootReducer;

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import reducers from "./reducers";
import App from "./components/App";
//import registerServiceWorker from "./registerServiceWorker";
import {
  loadFromLocalStorage,
  saveToLocalStorage
} from "./helpers/local_storage";

const persistedState = loadFromLocalStorage();

const store = createStore(
  reducers,
  persistedState,
  compose(applyMiddleware(thunk))
);

store.subscribe(() => {
  saveToLocalStorage({
    auth: store.getState().auth
  });
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

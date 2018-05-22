import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { injectGlobal } from "styled-components";

import reducers from "./reducers";
import App from "./components/App";
//import registerServiceWorker from "./registerServiceWorker";
import {
  loadFromLocalStorage,
  saveToLocalStorage
} from "./helpers/local_storage";

const persistedState = loadFromLocalStorage();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  persistedState,
  composeEnhancers(applyMiddleware(thunk))
);

store.subscribe(() => {
  saveToLocalStorage({
    auth: store.getState().auth
  });
});

injectGlobal`
html {
  box-sizing: border-box
}
* {
  margin:0;
  box-sizing: inherit;
}
svg {
  box-sizing: content-box;
}
`;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

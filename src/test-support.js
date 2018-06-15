import thunk from "redux-thunk";
import configureStore from "redux-mock-store";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const mockAxios = new MockAdapter(axios);

export { mockStore, mockAxios };

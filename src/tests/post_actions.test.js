import { mockStore, mockAxios } from "../test-support";
import { logIn } from "../actions/post_requests";
import { AUTH_USER } from "../actions/types";

const buildCredentials = props => ({
  email: "user@example.com",
  password: "password",
  ...props
});

const mockLogin = ({ status, responseData }) =>
  mockAxios.onPost("/api/login").reply(status, responseData);

describe("Log in", () => {
  it("Dispatches the auth user action", () => {
    const data = buildCredentials();

    const responseData = {
      id: 1,
      firstName: "ola"
    };

    const store = mockStore();
    const callback = () => {};
    mockLogin({ status: 200, responseData });

    store.dispatch(logIn(data, callback)).then(() => {
      expect(store.getActions()).toEqual([
        {
          type: "AUTH_USER",
          payload: responseData
        }
      ]);
    });
  });
  it("Calls the callback", () => {
    const data = buildCredentials();

    const responseData = {
      id: 1,
      firstName: "ola"
    };

    const store = mockStore();
    const callback = jest.fn();
    mockLogin({ status: 200, responseData });

    store.dispatch(logIn(data, callback)).then(() => {
      expect(callback).toHaveBeenCalledWith(responseData);
    });
  });
  it("With invalid credentials, dipatches a error action", () => {
    const data = buildCredentials({ password: "wrongpassword" });

    const responseData = {
      type: "error",
      message: "Password incorrect."
    };

    const store = mockStore();
    const callback = jest.fn();
    mockLogin({ status: 422, responseData });

    store.dispatch(logIn(data, callback)).then(() => {
      expect(store.getActions()).toEqual([
        {
          type: "ADD_ERROR",
          payload: responseData
        }
      ]);
    });
  });
  it("With unknown error, dispatches a error action", () => {
    const data = buildCredentials({ password: "wrongpassword" });

    const defaultError = {
      type: "error",
      message:
        "There was an error on our side. Please try again letter or contact a member of out team for assistance."
    };

    const store = mockStore();
    const callback = jest.fn();
    mockLogin({ status: 500 });

    store.dispatch(logIn(data, callback)).then(() => {
      expect(store.getActions()).toEqual([
        {
          type: "ADD_ERROR",
          payload: defaultError
        }
      ]);
    });
  });
});

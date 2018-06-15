import { mockStore, mockAxios } from "../test-support";
import { UNAUTH_USER, FETCH_UNIVERSITIES, ADD_ERROR } from "../actions/types";
import { fetchUniversities, logOut } from "../actions/get_requests";

describe("Logout action", () => {
  const mockLogout = () => mockAxios.onGet("/api/logout").reply(200);
  it("Makes sure user is logged out", () => {
    const store = mockStore();
    const callback = () => {};
    mockLogout();

    store.dispatch(logOut(callback)).then(() => {
      expect(store.getActions()).toEqual([
        {
          type: UNAUTH_USER,
          payload: false
        }
      ]);
    });
  });

  it("Calls the callback", () => {
    const store = mockStore();
    const callback = jest.fn();
    mockLogout();

    store.dispatch(logOut(callback)).then(() => {
      expect(callback).toHaveBeenCalled();
    });
  });
});

describe("Fetch universities", () => {
  it("Action creator returns an array of universities", () => {
    const mockFetchUniversities = () =>
      mockAxios.onGet("/api/allUni").reply(200, ["Durham university"]);
    const store = mockStore();
    mockFetchUniversities();

    store.dispatch(fetchUniversities()).then(() => {
      expect(store.getActions()).toEqual([
        {
          type: FETCH_UNIVERSITIES,
          payload: ["Durham university"]
        }
      ]);
    });
  });

  it("Returns an error if there is an error", () => {
    const mockFetchUniversities = () =>
      mockAxios.onGet("/api/allUni").reply(500);
    const store = mockStore();
    mockFetchUniversities();

    store.dispatch(fetchUniversities()).then(() => {
      expect(store.getActions()).toEqual([
        {
          type: ADD_ERROR,
          payload: {
            type: "error",
            message:
              "There was an error on our side. Please try again letter or contact a member of out team for assistance."
          }
        }
      ]);
    });
  });
});

describe("Fetch profile", () => {
  it();
});

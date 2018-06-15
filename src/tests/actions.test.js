import { mockStore, mockAxios } from "../test-support";
import { UNAUTH_USER } from "../actions/types";
import { logOut } from "../actions/get_requests";

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

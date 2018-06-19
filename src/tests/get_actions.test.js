import { mockStore, mockAxios } from "../test-support";
import {
  UNAUTH_USER,
  FETCH_UNIVERSITIES,
  ADD_ERROR,
  FETCH_PENDING,
  FETCH_PENDING_REQUESTS_MENTOR
} from "../actions/types";
import {
  fetchPending,
  fetchUniversities,
  logOut,
  fetchMentorPendingRequests
} from "../actions/get_requests";

describe("Logout action", () => {
  const mockLogout = () => mockAxios.onGet("/api/logout").reply(200);
  it("Makes sure user is logged out", () => {
    const store = mockStore();
    const callback = () => {};
    mockLogout();

    const expectedAction = {
      type: UNAUTH_USER,
      payload: false
    };

    store.dispatch(logOut(callback)).then(() => {
      expect(store.getActions()).toEqual([expectedAction]);
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

// describe("Fetch mentor pending requests", () => {
//   it("Returns data", () => {
//     const mockFetchMentorPendingRequests = () =>
//       mockAxios
//         .onGet("/api/pendingRequestsMentor", {
//           params: { MentorRegistrationId: 3 }
//         })
//         .reply(200);
//     const store = mockStore();
//     mockFetchMentorPendingRequests();

//     store.dispatch(fetchMentorPendingRequests()).then(() => {
//       console.log("hy");
//       expect(store.getActions()).toEqual([
//         {
//           type: FETCH_PENDING_REQUESTS_MENTOR,
//           payload: []
//         }
//       ]);
//     });
//   });
// });

// describe("Fetch pending", () => {
//   it("Action creator works", () => {
//     const uni = "Durham university";
//     const mockFetchPending = () =>
//       mockAxios.onGet(`/api/pending/${uni}`).reply(200);

//     const store = mockStore();
//     console.log("eh");
//     mockFetchPending();
//     store.dispatch(fetchPending()).then(() => {
//       console.log("hey");
//       expect(store.getActions()).toEqual([
//         {
//           type: FETCH_PENDING,
//           payload: [{}]
//         }
//       ]);
//     });
//   });
// });

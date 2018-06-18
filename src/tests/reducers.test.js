import deepFreeze from "deep-freeze";
import alertReducer from "../reducers/alert_reducer";
import universityReducer from "../reducers/universities_reducer";
import pendingApplicationReducer from "../reducers/pending_reducer";
import {
  FETCH_UNIVERSITIES,
  ADD_ERROR,
  FETCH_PENDING,
  USER_ACCEPTED
} from "../actions/types";

describe("Alert reducer", () => {
  it("Adds an error", () => {
    const prevState = {};
    const action = {
      type: ADD_ERROR,
      payload: { type: "error", message: "oops, something went wrong" }
    };
    deepFreeze(prevState);

    const newState = alertReducer(prevState, action);
    console.log("NEW STATE LOGOUT: ", newState);
    const expectedNewState = {
      type: "error",
      message: "oops, something went wrong"
    };
    console.log("LOGOUT EXPECTED: ", expectedNewState);
    expect(newState).toEqual(expectedNewState);
  });
});

describe("Universities reducer", () => {
  it("Returns an array in its an action payload", () => {
    const prevState = [];
    const action = {
      type: FETCH_UNIVERSITIES,
      payload: ["Durham university"]
    };
    const newState = universityReducer(prevState, action);
    console.log("NEW STATE UNI: ", newState);
    const expectedNewState = ["Durham university"];
    console.log("UNI REDUCER: ", expectedNewState);
    expect(newState).toEqual(expectedNewState);
  });
});

describe("Pending applications reducer", () => {
  it("FETCH_PENDING returns initial state", () => {
    expect(pendingApplicationReducer(undefined, [])).toEqual([]);
  });

  it("FETCH_PENDING payload returns an array of users pending", () => {
    const prevState = [];
    const action = {
      type: FETCH_PENDING,
      payload: [{}, {}]
    };
    deepFreeze(prevState);
    const newState = pendingApplicationReducer(prevState, action);
    const expectedNewState = {
      type: FETCH_PENDING,
      payload: [{}, {}]
    };
    expect(newState).toEqual(expectedNewState.payload);
  });

  it("Accept pending users and update state", () => {
    const prevState = [
      {
        id: 1,
        firstName: "Ola",
        lastName: "Gbaja",
        email: "ola@example.com",
        universityName: "Durham university",
        accountType: "Mentor",
        status: "Pending"
      }
    ];
    const action = {
      type: USER_ACCEPTED,
      payload: "ola@example.com"
    };
    deepFreeze(prevState);
    const newState = pendingApplicationReducer(prevState, action);
    console.log("NEW STATE: ", newState);
    const expectedNewState = [];
    expect(newState).toEqual(expectedNewState);
  });
});

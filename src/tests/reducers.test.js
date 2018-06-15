import deepFreeze from "deep-freeze";
import alertReducer from "../reducers/alert_reducer";
import universityReducer from "../reducers/universities_reducer";
import { FETCH_UNIVERSITIES, ADD_ERROR } from "../actions/types";

describe("Alert reducer", () => {
  it("Adds an error", () => {
    const prevState = {};
    const action = {
      type: ADD_ERROR,
      payload: { type: "error", message: "oops, something went wrong" }
    };
    deepFreeze(prevState);

    const newState = alertReducer(prevState, action);

    const expectedNewState = {
      type: "error",
      message: "oops, something went wrong"
    };
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

    const expectedNewState = ["Durham university"];

    expect(newState).toEqual(expectedNewState);
  });
});

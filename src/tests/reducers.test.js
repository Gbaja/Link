import deepFreeze from "deep-freeze";
import reducer from "../reducers/alert_reducer";

describe("Alert reducer", () => {
  it("Adds an error", () => {
    const prevState = {};
    const action = {
      type: "ADD_ERROR",
      payload: { type: "error", message: "oops, something went wrong" }
    };
    deepFreeze(prevState);

    const newState = reducer(prevState, action);

    const expectedNewState = {
      type: "error",
      message: "oops, something went wrong"
    };
    expect(newState).toEqual(expectedNewState);
  });
});

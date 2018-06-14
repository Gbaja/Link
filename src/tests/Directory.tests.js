import React from "react";
import DirectoryContainer from "../components/Directory/DirectoryContainer";
import { Shallow } from "enzyme";

describe("Directory component", () => {
  it("starts with loading false", () => {
    const wrapper = Shallow(<DirectoryContainer />);
    const loadingState = wrapper.state().loadingState;
    expect(loadingState).toEqual(false);
  });
});

import React from "react";
import DirectoryContainer from "../components/Directory/DirectoryContainer";
import { Shallow } from "enzyme";

test("Jest is working", () => {
  expect(true).toBeTruthy();
});

test("starts with loading false", () => {
  const wrapper = Shallow(<DirectoryContainer />);
  const loadingState = wrapper.state().loadingState;
  expect(loadingState).toEqual(false);
});

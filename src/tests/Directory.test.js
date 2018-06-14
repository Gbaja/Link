import React from "react";
import { shallow } from "enzyme";

import { DirectoryContainer } from "../components/Directory/DirectoryContainer";

const directory = {
  count: 2,
  rows: []
};

const auth = {
  accountType: "Mentor"
};

const match = {
  params: {
    type: "mentor"
  }
};
const mockFetchDirectory = jest.fn();
mockFetchDirectory.mockReturnValue(Promise.resolve());

describe("Directory component", () => {
  it("starts with the correct initial state", () => {
    //shallow runs componentdidmount, disable it to stop this

    const wrapper = shallow(
      <DirectoryContainer
        directory={directory}
        auth={auth}
        match={match}
        fetchDirectory={mockFetchDirectory}
      />,
      {
        disableLifecycleMethods: true
      }
    );
    expect(wrapper.state()).toEqual({
      loading: false,
      currentPage: 0,
      numberOfPages: [],
      filter: {}
    });
  });
  it("should update loading state correctly", () => {
    const wrapper = shallow(
      <DirectoryContainer
        directory={directory}
        auth={auth}
        match={match}
        fetchDirectory={mockFetchDirectory}
      />,
      {
        disableLifecycleMethods: true
      }
    );
    expect(wrapper.state().loading).toBeFalsy();
    wrapper.instance().componentDidMount();
    expect(wrapper.state().loading).toBeTruthy();
    wrapper.instance().componentDidUpdate({ directory: {} });
    expect(wrapper.state().loading).toBeFalsy();
  });
});

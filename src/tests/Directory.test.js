import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import { MemoryRouter } from "react-router-dom";

import { DirectoryContainer } from "../components/Directory/DirectoryContainer";
import { Directory } from "../components/Directory/Directory";

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

const details = [
  {
    id: 1,
    accountType: "Mentor",
    firstName: "Ola",
    lastName: "Gbaja",
    email: "ola@example.com",
    location: "UK",
    gender: "Female",
    ethnicity: "Black",
    imageUrl: "",
    universityName: "Durham university",
    degree: "Economics",
    graduationYear: "2011",
    jobTitle: "Dev",
    company: "FAC",
    dateStarted: "2011",
    endDate: "",
    industry: "tech",
    biography: "",
    reason: "",
    cv: true,
    shadow: true,
    interview: false,
    job: false,
    postgrad: true,
    career: true,
    socialMediaUrl: "",
    availability: "",
    createdAt: ""
  }
];
const mockShowPage = jest.fn();
const numberOfPages = [];
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

  it("Directory renders as stated", () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <Directory
            details={details}
            showPage={mockShowPage}
            numberOfPages={numberOfPages}
          />
        </MemoryRouter>
      )
      .toJSON();
    console.log("TREE: ", tree);
    expect(tree).toMatchSnapshot();
  });
});

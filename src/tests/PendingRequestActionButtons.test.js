import React from "react";
import { shallow } from "enzyme";
import { MentorActionButtons } from "../components/PendingRequests/ActionButtons";

describe("Mentor action buttons", () => {
  it("stimulates a click event", () => {
    const requestId = 3;
    const mentorshipRequestAction = jest.fn();
    const body = {
      requestId,
      status: "Accept"
    };
    const wrapper = shallow(
      <MentorActionButtons
        request={requestId}
        mentorshipRequestAction={mentorshipRequestAction}
      />
    );

    wrapper.find(".accept").simulate("click");
    expect(mentorshipRequestAction).toHaveBeenCalledWith(body);
  });
});

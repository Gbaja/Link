import NewUniFile from "../../server/routes/new_uni";

jest.mock("../../server/models", () => {
  return require("../../__mock__/models/models.mock");
});

describe("new uni test", () => {
  it("should return a status of 422 when the email is already in use", () => {
    const statusMock = jest.fn();
    const sendMock = data => {
      expect(statusMock.mock.calls.length).toBe(1);
      expect(statusMock.mock.calls[0][0]).toBe(422);
      expect(data).toEqual({
        type: "error",
        message:
          "This email address has already been used to create a account with Young&giving, please try logging in."
      });
    };

    statusMock.mockReturnValue({
      send: sendMock
    });
    const body = {
      universityName: "",
      email: "test2@example.com",
      accountType: ""
    };
    NewUniFile.post(
      { body },
      {
        status: statusMock,
        send: sendMock
      }
    );
  });
});

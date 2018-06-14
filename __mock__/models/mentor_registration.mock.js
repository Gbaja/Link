const SequelizeMock = require("sequelize-mock");

const dbMock = new SequelizeMock();

const MentorMock = dbMock.define(
  "MenteeRegistration",
  {
    firstName: "Mentor",
    lastName: "Example",
    email: "test3@example.com",
    accountType: "Mentor",
    password: "apple"
  },
  {
    instanceMethods: {
      getMentorName: function() {
        return this.get("firstName");
      }
    }
  }
);

module.exports = MentorMock;

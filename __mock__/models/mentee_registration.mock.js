const SequelizeMock = require("sequelize-mock");

const dbMock = new SequelizeMock();

const MenteeMock = dbMock.define(
  "MenteeRegistration",
  {
    firstName: "Test",
    lastName: "Example",
    email: "test2@example.com",
    accountType: "Mentee",
    password: "apple"
  },
  {
    instanceMethods: {
      getMenteeName: function() {
        return this.get("firstName");
      }
    }
  }
);

module.exports = MenteeMock;

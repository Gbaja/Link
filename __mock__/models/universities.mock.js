const SequelizeMock = require("sequelize-mock");

const dbMock = new SequelizeMock();

const UniMock = dbMock.define(
  "university",
  {
    universityName: "Brighton uni",
    email: "test@example.com",
    accountType: "university",
    password: "apple"
  },
  {
    instanceMethods: {
      getUniversityName: function() {
        return this.get("universityName");
      }
    }
  }
);

module.exports = UniMock;

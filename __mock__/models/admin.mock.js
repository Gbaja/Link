const SequelizeMock = require("sequelize-mock");

const dbMock = new SequelizeMock();

const AdminMock = dbMock.define(
  "Admin",
  {
    name: "Test",
    email: "test2@example.com",
    accountType: "Admin",
    password: "apple"
  },
  {
    instanceMethods: {
      getAdminName: function() {
        return this.get("name");
      }
    }
  }
);

module.exports = AdminMock;

//const models = require("./models");

const Requests = (sequelize, DataTypes) => {
  const Requests = sequelize.define("Requests", {
    menteeEmail: DataTypes.STRING,
    mentorEmail: DataTypes.STRING,
    requestMessage: DataTypes.STRING,
    responseMessage: DataTypes.STRING,
    matched: DataTypes.STRING,
    createdAt: {
      type: DataTypes.DATE(3)
    },
    updatedAt: {
      type: DataTypes.DATE(3)
    }
  });

  return Requests;
};

module.exports = Requests;

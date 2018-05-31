//const models = require("./models");

const Requests = (sequelize, DataTypes) => {
  const Requests = sequelize.define("Requests", {
    cv: DataTypes.BOOLEAN,
    shadow: DataTypes.BOOLEAN,
    interview: DataTypes.BOOLEAN,
    job: DataTypes.BOOLEAN,
    postgrad: DataTypes.BOOLEAN,
    career: DataTypes.BOOLEAN,
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

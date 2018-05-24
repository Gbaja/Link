const { hashPassword } = require("../utils/hash_password");

const Universities = (sequelize, DataTypes) => {
  const Universities = sequelize.define("Universities", {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    accountType: DataTypes.STRING,
    password: DataTypes.STRING,
    passwordResetToken: DataTypes.STRING,
    createdAt: {
      type: DataTypes.DATE(3)
    },
    updatedAt: {
      type: DataTypes.DATE(3)
    }
  });

  return Universities;
};

module.exports = Universities;

const hashPassword = require("../utils/hash_password");

const Universities = (sequelize, DataTypes) => {
  const Universities = sequelize.define("Universities", {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    passwordResetToken: DataTypes.STRING,
    createdAt: {
      type: DataTypes.DATE(3)
    },
    updatedAt: {
      type: DataTypes.DATE(3)
    }
  });

  Universities.beforeCreate((user, options) => {
    return hashPassword(user.password).then(hashedPw => {
      user.password = hashedPw;
    });
  });
  return Universities;
};

module.exports = Universities;

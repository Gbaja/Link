const hashPassword = require("../utils/hash_password");

const Admins = (sequelize, DataTypes) => {
  const Admins = sequelize.define("Admin", {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    role: DataTypes.STRING,
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

  Admins.beforeCreate((user, options) => {
    return hashPassword(user.password).then(hashedPw => {
      user.password = hashedPw;
    });
  });

  return Admins;
};

module.exports = Admins;

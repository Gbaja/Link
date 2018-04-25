//LOOK INTO DATATYPE VISUAL FOR PASSWORD
const hashPassword = require("../utils/hash_password");

const Registration = (sequelize, DataTypes) => {
  const Registration = sequelize.define("Registration", {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    accountType: DataTypes.STRING,
    currentRole: DataTypes.STRING,
    currentCompany: DataTypes.STRING,
    age: DataTypes.STRING,
    biography: DataTypes.STRING,
    offerTags: DataTypes.STRING,
    motivation: DataTypes.STRING,
    createdAt: {
      type: DataTypes.DATE(3)
    },
    updatedAt: {
      type: DataTypes.DATE(3)
    }
  });
  //the association code below will add registration id to Registration
  // Registration.associate = models => {
  //   Registration.hasOne(models.Mentors, { foreignKey: "registrationId" });
  // };
  Registration.beforeCreate((user, options) => {
    return hashPassword(user.password).then(hashedPw => {
      user.password = hashedPw;
    });
  });
  return Registration;
};

module.exports = Registration;

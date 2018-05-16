//LOOK INTO DATATYPE VISUAL FOR PASSWORD
const models = require("./index");
const hashPassword = require("../utils/hash_password");

const MentorRegistrations = (sequelize, DataTypes) => {
  const MentorRegistrations = sequelize.define("MentorRegistration", {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    accountType: DataTypes.STRING,
    age: DataTypes.STRING,
    location: DataTypes.STRING,
    universityName: DataTypes.STRING,
    degree: DataTypes.STRING,
    currentIndustry: DataTypes.STRING,
    currentRole: DataTypes.STRING,
    currentCompany: DataTypes.STRING,
    biography: DataTypes.STRING,
    motivation: DataTypes.STRING,
    offer: DataTypes.STRING,
    confirmDetails: DataTypes.BOOLEAN,
    passwordResetToken: DataTypes.STRING,
    socialMediaUrl: DataTypes.STRING,
    status: DataTypes.STRING,
    createdAt: {
      type: DataTypes.DATE(3)
    },
    updatedAt: {
      type: DataTypes.DATE(3)
    }
  });

  MentorRegistrations.beforeCreate((user, options) => {
    return hashPassword(user.password).then(hashedPw => {
      user.password = hashedPw;
    });
  });
  return MentorRegistrations;
};

module.exports = MentorRegistrations;

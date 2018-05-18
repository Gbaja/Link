const models = require("./index");
const hashPassword = require("../utils/hash_password");

const MenteeRegistrations = (sequelize, DataTypes) => {
  const MenteeRegistrations = sequelize.define("MenteeRegistration", {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    accountType: DataTypes.STRING,
    location: DataTypes.STRING,
    currentMotive: DataTypes.STRING,
    age: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
    universityName: DataTypes.STRING,
    degree: DataTypes.STRING,
    mentorIndustry: DataTypes.STRING,
    reason: DataTypes.STRING,
    biography: DataTypes.STRING,
    confirmDetails: DataTypes.BOOLEAN,
    passwordResetToken: DataTypes.STRING,
    socialMediaUrl: DataTypes.STRING,
    availability: DataTypes.STRING,
    status: DataTypes.STRING,
    createdAt: {
      type: DataTypes.DATE(3)
    },
    updatedAt: {
      type: DataTypes.DATE(3)
    }
  });

  MenteeRegistrations.beforeCreate((user, options) => {
    return hashPassword(user.password).then(hashedPw => {
      user.password = hashedPw;
    });
  });
  return MenteeRegistrations;
};

module.exports = MenteeRegistrations;

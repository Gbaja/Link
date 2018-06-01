const { hashPassword } = require("../utils/hash_password");

const MenteeRegistrations = (sequelize, DataTypes) => {
  const MenteeRegistrations = sequelize.define("MenteeRegistration", {
    accountType: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    location: DataTypes.STRING,
    gender: DataTypes.STRING,
    ethnicity: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
    universityName: DataTypes.STRING,
    degree: DataTypes.STRING,
    graduationYear: DataTypes.STRING,
    jobTitle: DataTypes.STRING,
    company: DataTypes.STRING,
    dateStarted: DataTypes.STRING,
    endDate: DataTypes.STRING,
    industry: DataTypes.STRING,
    reason: DataTypes.STRING,
    biography: DataTypes.STRING,
    confirmDetails: DataTypes.BOOLEAN,
    password: DataTypes.STRING,
    passwordResetToken: DataTypes.STRING,
    cv: DataTypes.BOOLEAN,
    shadow: DataTypes.BOOLEAN,
    interview: DataTypes.BOOLEAN,
    job: DataTypes.BOOLEAN,
    postgrad: DataTypes.BOOLEAN,
    career: DataTypes.BOOLEAN,
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

  MenteeRegistrations.associate = models => {
    MenteeRegistrations.hasMany(models.Requests);
  };

  return MenteeRegistrations;
};

module.exports = MenteeRegistrations;

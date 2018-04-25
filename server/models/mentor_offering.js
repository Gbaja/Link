const MentorOfferings = (sequelize, DataTypes) => {
  const MentorOfferings = sequelize.define("MentorOfferings", {
    careerPlanning: DataTypes.BOOLEAN,
    cv: DataTypes.BOOLEAN,
    jobsAndInterview: DataTypes.BOOLEAN
  });
  return MentorOfferings;
};

module.exports = MentorOfferings;

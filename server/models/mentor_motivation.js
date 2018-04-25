const MentorMotivations = (sequelize, DataTypes) => {
  const MentorMotivations = sequelize.define("MentorMotivations", {
    developSkills: DataTypes.BOOLEAN,
    understandingYoungPeople: DataTypes.BOOLEAN,
    rewarding: DataTypes.BOOLEAN
  });
  return MentorMotivations;
};

module.exports = MentorMotivations;

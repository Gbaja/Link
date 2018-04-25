const Mentors = (sequelize, DataTypes) => {
  const Mentors = sequelize.define("Mentors", {
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
  return Mentors;
};

module.exports = Mentors;

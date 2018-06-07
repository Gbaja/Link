const Requests = (sequelize, DataTypes) => {
  const Requests = sequelize.define("Requests", {
    cv: DataTypes.BOOLEAN,
    shadow: DataTypes.BOOLEAN,
    interview: DataTypes.BOOLEAN,
    job: DataTypes.BOOLEAN,
    postgrad: DataTypes.BOOLEAN,
    career: DataTypes.BOOLEAN,
    requestMessage: DataTypes.STRING,
    status: DataTypes.STRING,
    createdAt: {
      type: DataTypes.DATE(3)
    },
    updatedAt: {
      type: DataTypes.DATE(3)
    }
  });

  Requests.associate = models => {
    Requests.belongsTo(models.MenteeRegistrations);
    Requests.belongsTo(models.MentorRegistrations);
  };

  return Requests;
};

module.exports = Requests;

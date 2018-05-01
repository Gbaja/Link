const models = require("../models");

exports.get = (req, res) => {
  try {
    const userId = req.params.id;
    console.log("USER ID: ", userId);
    return models.MentorRegistrations.findOne({ where: { id: userId } }).then(
      data => {
        console.log("RES: ", data.dataValues);
        res.send(data.dataValues);
        models.MentorMotivations.findOne({
          where: { mentorId: data.dataValues.id }
        }).then(data => {
          if (!data) {
            console.log("no");
          } else {
            return data;
          }
        });
      }
    );
  } catch (err) {
    console.log("My profile error: ", err);
  }
};

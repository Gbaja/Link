const models = require("../models");

exports.get = (req, res) => {
  try {
    const userId = req.params.id;
    console.log("USER ID: ", userId);
    return models.MenteeRegistrations.findOne({ where: { id: userId } }).then(
      data => {
        console.log("RES: ", data.dataValues);
        res.send(data.dataValues);
      }
    );
  } catch (err) {
    console.log("My profile error: ", err);
  }
};

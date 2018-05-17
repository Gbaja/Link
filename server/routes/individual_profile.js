const getModelFromType = require("../utils/model_type");
const models = require("../models");
const { mentorDetails, menteeDetails } = require("../utils/details");

exports.get = (req, res) => {
  const { id, accountType } = req.params;

  const type = getModelFromType(accountType.toLowerCase());

  return models[type]
    .findOne({
      where: { id: id }
    })
    .then(data => {
      if (data.accountType === "Mentor") {
        res.send(mentorDetails(data));
      } else if (data.accountType === "Mentee") {
        res.send(menteeDetails(data));
      }
    });
};

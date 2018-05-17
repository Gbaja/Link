const models = require("../models");
const getModelFromType = require("../utils/model_type");
const { mentorDetails, menteeDetails } = require("../utils/details");

exports.get = (req, res) => {
  const { pageNum, accountType } = req.params;
  const type = getModelFromType(accountType.toLowerCase());
  return models[type]
    .findAndCountAll({
      limit: 1,
      offset: (pageNum - 1) * 1
    })
    .then(data => {
      res.send(data);
      // if (type === "mentor") {
      //   res.send(mentorDetails(data));
      // } else if (type === "mentee") {
      //   res.send({menteeDetails(data.rows)});
      // }
    });
};

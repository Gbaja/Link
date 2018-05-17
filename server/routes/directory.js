const models = require("../models");
const getModelFromType = require("../utils/model_type");

exports.get = (req, res) => {
  const { pageNum, accountType } = req.params;
  const type = getModelFromType(accountType.toLowerCase());
  return models[type]
    .findAndCountAll({
      limit: 1,
      offset: (pageNum - 1) * 1
    })
    .then(mentors => {
      res.send(mentors);
    });
};

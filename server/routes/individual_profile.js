const getModelFromType = require("../utils/model_type");
const models = require("../models");

exports.get = (req, res) => {
  const { id, accountType } = req.params;

  const type = getModelFromType(accountType.toLowerCase());

  return models[type]
    .findOne({
      where: { id: id }
    })
    .then(data => {
      res.send(data);
    });
};

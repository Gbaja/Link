const models = require("../models");

exports.get = (req, res) => {
  const id = req.params.id;
  models.MenteeRegistrations.findOne({
    where: { id: id }
  }).then(data => {
    res.send(data);
  });
};

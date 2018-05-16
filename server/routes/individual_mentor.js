const models = require("../models");

exports.get = (req, res) => {
  const id = req.params.id;
  models.MentorRegistrations.findOne({
    where: { id: id }
  }).then(data => {
    res.send(data);
  });
};

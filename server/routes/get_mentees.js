const models = require("../models");

exports.get = (req, res) => {
  const page = req.params.pageNum;
  return models.MenteeRegistrations.findAndCountAll({
    limit: 1,
    offset: (page - 1) * 1
  }).then(mentees => {
    res.send(mentees);
  });
};

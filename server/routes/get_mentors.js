const models = require("../models");

exports.get = (req, res) => {
  const page = req.params.pageNum;
  return models.MentorRegistrations.findAndCountAll({
    limit: 10,
    offset: (page - 1) * 10
  }).then(mentors => {
    res.send(mentors);
  });
};

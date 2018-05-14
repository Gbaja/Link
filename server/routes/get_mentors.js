const models = require("../models");

exports.get = (req, res) => {
  const page = req.params.pageNum;
  return models.MentorRegistrations.findAndCountAll({
    limit: 1,
    offset: (page - 1) * 1
  }).then(mentors => {
    res.send(mentors);
  });
};

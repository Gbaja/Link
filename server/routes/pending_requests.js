const models = require("../models");

exports.get = (req, res) => {
  const mentorEmail = req.query.mentorEmail;

  models.Requests.findAll({ where: { mentorEmail: mentorEmail } }).then(
    data => {
      res.send(data);
    }
  );
};

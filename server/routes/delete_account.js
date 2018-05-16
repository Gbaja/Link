const models = require("../models");

exports.delete = (req, res) => {
  const email = req.body.email;
  return models.MentorRegistrations.destroy({
    where: {
      email: email
    }
  }).then(affectedRows => {
    if (affectedRows === 0) {
      return models.MenteeRegistrations.destroy({
        where: {
          email: email
        }
      }).then(affectedRows => {
        res.send("Account deleted.");
      });
    } else {
      res.send("Account deleted.");
    }
  });
};

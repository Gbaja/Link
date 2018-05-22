const models = require("../models");

exports.delete = (req, res) => {
  console.log("REQUEST BODY: ", req.body);
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
        res.status(422).send({ type: "sucess", message: "Account deleted." });
      });
    } else {
      res.status(422).send({ type: "sucess", message: "Account deleted." });
    }
  });
};

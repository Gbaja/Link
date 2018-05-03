const models = require("../models");

exports.post = (req, res) => {
  const { firstName, lastName, accountType, email, password } = req.body;
  return models.MentorRegistrations.findOne({
    where: { email: email.toLowerCase() }
  }).then(existingUser => {
    if (existingUser) {
      res
        .status(422)
        .send(
          "This email address has already been used to create an account with Young&giving, please try logging in."
        );
    } else {
      return models.MentorRegistrations.create({
        firstName,
        lastName,
        accountType,
        email,
        password
      }).then(data => {
        req.session.mentor_id = data.dataValues.id;
        console.log("SIGN UP COOKIE: ", req.session);
        res.send(data.dataValues);
      });
    }
  });
};

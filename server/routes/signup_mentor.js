const models = require("../models");
const signupTemplate = require("../utils/email_templates/signup_email");

exports.post = (req, res) => {
  const {
    firstName,
    lastName,
    accountType,
    email,
    password,
    confirmDetails
  } = req.body;
  return models.MentorRegistrations.findOne({
    where: { email: email.toLowerCase() }
  }).then(existingMentor => {
    if (existingMentor) {
      res
        .status(422)
        .send(
          "This email address has already been used to create a mentor account with Young&giving, please try logging in."
        );
    } else {
      models.MenteeRegistrations.findOne({
        where: { email: email.toLowerCase() }
      }).then(existingMentee => {
        if (existingMentee) {
          res
            .status(422)
            .send(
              "This email address has already been used to create a mentee account with Young&giving, please try logging in."
            );
        } else {
          models.MentorRegistrations.create({
            firstName,
            lastName,
            accountType,
            email,
            password,
            confirmDetails
          }).then(data => {
            console.log("SIGN UP DATA: ", data);
            req.session.mentor_id = data.dataValues.id;
            console.log("SIGN UP COOKIE: ", req.session);
            signupTemplate(data.dataValues);
            res.send(data.dataValues);
          });
        }
      });
    }
  });
};

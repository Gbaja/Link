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
  models.MenteeRegistrations.findOne({
    where: { email: email.toLowerCase() }
  }).then(existingMentee => {
    if (existingMentee) {
      return res
        .status(422)
        .send(
          "This email address has already been used to create a mentee account with Young&giving, please try logging in."
        );
    } else {
      models.MentorRegistrations.findOne({
        where: { email: email.toLowerCase() }
      }).then(existingMentor => {
        if (existingMentor) {
          return res
            .status(422)
            .send(
              "This email address has already been used to create a mentor with Young&giving, please try logging in."
            );
        } else {
          models.MenteeRegistrations.create({
            firstName,
            lastName,
            accountType,
            email,
            password,
            confirmDetails
          }).then(data => {
            req.session.user_id = data.dataValues.id;
            console.log("SIGN UP COOKIE: ", req.session);
            console.log("sign up data : ", data.dataValues.id);
            signupTemplate(data.dataValues);
            res.send(data.dataValues);
          });
        }
      });
    }
  });
};

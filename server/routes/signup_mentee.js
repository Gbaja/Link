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
  return models.MenteeRegistrations.findOne({
    where: { email: email.toLowerCase() }
  }).then(existingUser => {
    if (existingUser) {
      return res
        .status(422)
        .send(
          "This email address has already been used to create an account with Young&giving, please try logging in."
        );
    } else {
      return models.MenteeRegistrations.create({
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
};

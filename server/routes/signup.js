const models = require("../models");
const signupTemplate = require("../utils/email_templates/signup_email");
const getModelFromType = require("../utils/model_type");
const { details } = require("../utils/details");

exports.post = (req, res) => {
  const {
    firstName,
    lastName,
    accountType,
    universityName,
    email,
    password,
    confirmDetails
  } = req.body;

  const type = getModelFromType(accountType.toLowerCase());

  Promise.all([
    models.MentorRegistrations.findOne({
      where: { email: email.toLowerCase() }
    }),
    models.MenteeRegistrations.findOne({
      where: { email: email.toLowerCase() }
    })
  ]).then(([mentor, mentee]) => {
    if (mentor || mentee) {
      res.send({
        type: "error",
        message:
          "This email address has already been used to create an account with Young&giving, please try logging in."
      });
      return;
    }
    models[type]
      .create({
        firstName,
        lastName,
        accountType,
        universityName,
        email,
        password,
        confirmDetails
      })
      .then(data => {
        console.log("SIGN UP DATA: ", data);
        req.session.user_id = data.dataValues.id;
        console.log("SIGN UP COOKIE: ", req.session);
        signupTemplate(data.dataValues);
        res.send(details(data.dataValues));
      });
  });
};

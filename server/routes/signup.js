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
    status,
    confirmDetails
  } = req.body;

  const type = getModelFromType(accountType.toLowerCase());

  Promise.all([
    models.MenteeRegistrations.findOne({ where: { email } }),
    models.MentorRegistrations.findOne({ where: { email } }),
    models.Universities.findOne({ where: { email } }),
    models.Admins.findOne({ where: { email } })
  ]).then(([Mentee, Mentor, Uni, Admin]) => {
    if (Mentee || Mentor || Uni || Admin) {
      return res.status(422).send({
        type: "error",
        message:
          "This email address has already been used to create a account with Young & giving, please try logging in."
      });
    }
    models[type]
      .create({
        firstName,
        lastName,
        accountType,
        universityName,
        email,
        password,
        status,
        confirmDetails
      })
      .then(data => {
        // signupTemplate(data.dataValues);
        res.send({
          type: "success",
          message:
            "Your application has been sent to your chosen uni. Please wait for a confirmation email before trying to log in."
        });
      });
  });
};

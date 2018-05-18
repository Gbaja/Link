const models = require("../models");
const signupTemplate = require("../utils/email_templates/signup_email");
const getModelFromType = require("../utils/model_type");
const { mentorDetails, menteeDetails } = require("../utils/details");

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
      res
        .status(422)
        .send(
          "This email address has already been used to create an account with Young&giving, please try logging in."
        );
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
        req.session.mentor_id = data.dataValues.id;
        console.log("SIGN UP COOKIE: ", req.session);
        signupTemplate(data.dataValues);
        if (data.dataValues.accountType === "Mentor") {
          res.send(mentorDetails(data.dataValues));
        } else if (data.dataValues.accountType === "Mentee") {
          res.send(menteeDetails(data.dataValues));
        }
      });
  });
};

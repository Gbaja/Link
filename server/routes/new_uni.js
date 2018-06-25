const models = require("../models");
const crypto = require("crypto");
const newUniEmail = require("../utils/email_templates/new_uni_email");

exports.post = (req, res) => {
  const { universityName, email, accountType } = req.body;
  const token = crypto.randomBytes(20).toString("base64");
  Promise.all([
    models.MenteeRegistrations.findOne({ where: { email } }),
    models.MentorRegistrations.findOne({ where: { email } }),
    models.Universities.findOne({ where: { email } }),
    models.Admins.findOne({ where: { email } })
  ]).then(([Mentee, Mentor, Uni, Admin]) => {
    if (Mentee || Mentor || Uni || Admin) {
      console.log("HERE");
      res.status(422).send({
        type: "error",
        message:
          "This email address has already been used to create a account with Young&giving, please try logging in."
      });
    } else {
      models.Universities.create({
        universityName,
        email,
        accountType,
        passwordResetToken: token
      }).then(data => {
        newUniEmail(data);
        console.log(data);
        res.send({
          type: "success",
          message:
            "University account created. Details have been sent to the university."
        });
      });
    }
  });
};

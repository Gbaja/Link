const models = require("../models");
const crypto = require("crypto");
const newUniEmail = require("../utils/email_templates/new_uni_email");

exports.post = (req, res) => {
  const { name, email, accountType } = req.body;
  const token = crypto.randomBytes(20).toString("base64");
  models.Universities.findOne({
    where: { email: email.toLowerCase() }
  }).then(uni => {
    if (uni) {
      res.send({
        type: "error",
        message:
          "This email address has already been used to create a university account with Young&giving, please try logging in."
      });
    } else {
      models.Universities.create({
        name,
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

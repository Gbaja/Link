const crypto = require("crypto");
const models = require("../models");
const forgotPasswordEmail = require("../utils/email_templates/forgot_password_email");

exports.post = (req, res) => {
  models.MentorRegistrations.findOne({ where: { email: req.body.email } }).then(
    mentor => {
      if (!mentor) {
        res.status(422).send("User does not exists, please create an account.");
      } else {
        const token = crypto.randomBytes(20).toString("base64");
        models.MentorRegistrations.update(
          {
            passwordResetToken: token,
            passwordResetTokenExpires: Date.now() + 3600000
          },
          { returning: true, where: { email: req.body.email } }
        ).then(([rowsUpdate, [updatedProfile]]) => {
          forgotPasswordEmail(updatedProfile, req);
          res.send(updatedProfile);
        });
      }
    }
  );
};

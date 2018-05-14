const crypto = require("crypto");
const models = require("../models");
const forgotPasswordEmail = require("../utils/email_templates/forgot_password_email");

exports.post = (req, res) => {
  const token = crypto.randomBytes(20).toString("base64");
  models.MentorRegistrations.findOne({ where: { email: req.body.email } }).then(
    mentor => {
      if (!mentor) {
        models.MenteeRegistrations.findOne({
          where: { email: req.body.email }
        }).then(mentee => {
          if (!mentee) {
            res
              .status(422)
              .send("User does not exists, please create an account.");
          } else {
            models.MenteeRegistrations.update(
              {
                passwordResetToken: token
              },
              { returning: true, where: { email: req.body.email } }
            ).then(([rowsUpdate, [updatedProfile]]) => {
              forgotPasswordEmail(updatedProfile, req);
              res.send(updatedProfile);
            });
          }
        });
      } else {
        models.MentorRegistrations.update(
          {
            passwordResetToken: token
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

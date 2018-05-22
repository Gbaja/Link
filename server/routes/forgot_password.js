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
            res.status(422).send({
              type: "error",
              message: "User does not exists, please create an account."
            });
          } else {
            models.MenteeRegistrations.update(
              {
                passwordResetToken: token
              },
              { returning: true, where: { email: req.body.email } }
            ).then(([rowsUpdate, [updatedProfile]]) => {
              forgotPasswordEmail(updatedProfile, req);
              res.status(422).send({
                type: "sucess",
                message:
                  "Please check your email for instructions on how to reset your password."
              });
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
          res.status(422).send({
            type: "sucess",
            message:
              "Please check your email for instructions on how to reset your password."
          });
        });
      }
    }
  );
};

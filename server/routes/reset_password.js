const models = require("../models");
const resetPasswordEmail = require("../utils/email_templates/reset_password_email");
const hashPassword = require("../utils/hash_password");

exports.post = (req, res) => {
  console.log({ password: req.body.password, token: req.query.token });
  models.MentorRegistrations.findOne({
    where: { passwordResetToken: req.query.token }
  }).then(mentor => {
    if (!mentor) {
      models.MenteeRegistrations.findOne({
        where: { passwordResetToken: req.query.token }
      }).then(mentee => {
        if (!mentee) {
          res.status(422).send("Invalid password token.");
        } else {
          hashPassword(req.body.password).then(password => {
            models.MenteeRegistrations.update(
              {
                password: password
              },
              {
                returning: true,
                where: { passwordResetToken: req.query.token }
              }
            ).then(([rowsUpdate, [updatedProfile]]) => {
              console.log("UPDATED PROFILE: ", updatedProfile);
              resetPasswordEmail(updatedProfile, req);
              res.send({
                message: "Your password has been updated, please sign in! ",
                data: updatedProfile
              });
            });
          });
        }
      });
    } else {
      hashPassword(req.body.password).then(password => {
        models.MentorRegistrations.update(
          {
            password: password
          },
          { returning: true, where: { passwordResetToken: req.query.token } }
        ).then(([rowsUpdate, [updatedProfile]]) => {
          console.log("UPDATED PROFILE: ", updatedProfile);
          resetPasswordEmail(updatedProfile, req);
          res.send({
            message: "Your password has been updated, please sign in! ",
            data: updatedProfile
          });
        });
      });
    }
  });
};

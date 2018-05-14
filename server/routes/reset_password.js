const models = require("../models");
const resetPasswordEmail = require("../utils/email_templates/reset_password_email");
const hashPassword = require("../utils/hash_password");

exports.post = (req, res) => {
  console.log({ password: req.body.password, token: req.query.token });
  models.MentorRegistrations.findOne({
    where: { passwordResetToken: req.query.token }
  }).then(user => {
    if (!user) {
      res.status(422).send("Invalid password token.");
    } else {
      hashPassword(req.body.password).then(password => {
        console.log("THEN PASSWORD: ", password);
        console.log("USERL ", user);
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

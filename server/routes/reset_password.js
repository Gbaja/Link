const models = require("../models");
const getModelFromType = require("../utils/model_type");
const resetPasswordEmail = require("../utils/email_templates/reset_password_email");
const { hashPassword } = require("../utils/hash_password");

exports.post = (req, res) => {
  const { token } = req.body;
  Promise.all([
    models.MentorRegistrations.findOne({
      where: { passwordResetToken: token }
    }),
    models.MenteeRegistrations.findOne({
      where: { passwordResetToken: token }
    }),
    models.Universities.findOne({
      where: { passwordResetToken: token }
    })
  ])
    .then(data => {
      if (data.every(x => x === null)) {
        return res.status(422).send({
          type: "error",
          message:
            "Inavalid token. Please use the forgot password page to resend link."
        });
      } else {
        const user = data.filter(each => {
          return each !== null;
        });
        console.log("USER::: ", user[0]);
        const type = getModelFromType(user[0].accountType.toLowerCase());
        hashPassword(req.body.password).then(password => {
          models[type]
            .update(
              {
                password: password,
                passwordResetToken: null
              },
              {
                returning: true,
                where: { passwordResetToken: token }
              }
            )
            .then(([rowsUpdate, [updatedProfile]]) => {
              res.send({
                type: "success",
                message: "Your password has been updated, please sign in!"
              });
            });
        });
      }
    })
    .catch(err => {
      console.log("RESET PASSWORD ERR: ", err);
    });
};

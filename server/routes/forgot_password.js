const crypto = require("crypto");
const models = require("../models");
const forgotPasswordEmail = require("../utils/email_templates/forgot_password_email");
const getModelFromType = require("../utils/model_type");

exports.post = (req, res) => {
  const { email } = req.body;
  const token = crypto.randomBytes(20).toString("base64");
  Promise.all([
    models.MenteeRegistrations.findOne({ where: { email } }),
    models.MentorRegistrations.findOne({ where: { email } }),
    models.Universities.findOne({ where: { email } })
  ]).then(data => {
    if (data.every(x => x === null)) {
      return res.status(422).send({
        type: "error",
        message: "User does not exists, please create an account."
      });
    } else {
      const user = data.filter(each => {
        return each !== null;
      });
      const type = getModelFromType(user[0].accountType.toLowerCase());
      console.log("TYPE: ", type);
      models[type]
        .update(
          {
            passwordResetToken: token
          },
          { returning: true, where: { email: req.body.email } }
        )
        .then(([rowsUpdate, [updatedProfile]]) => {
          forgotPasswordEmail(updatedProfile, req);
          res.send({
            type: "success",
            message:
              "Please check your email for instructions on how to reset your password."
          });
        });
    }
  });
};

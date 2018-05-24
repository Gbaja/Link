const models = require("../models");
const getModelFromType = require("../utils/model_type");
const resetPasswordEmail = require("../utils/email_templates/reset_password_email");
const { hashPassword } = require("../utils/hash_password");

exports.post = (req, res) => {
  const { token } = req.query;
  const { password } = req.body;
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
  ]).then(data => {
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
      const type = getModelFromType(user[0].accountType.toLowerCase());
      hashPassword(req.body.password).then(password => {
        models[type]
          .update(
            {
              password: password
              //passwordResetToken: null
            },
            {
              returning: true,
              where: { passwordResetToken: token }
            }
          )
          .then(([rowsUpdate, [updatedProfile]]) => {
            console.log("yaya");
            console.log("UPDATED PROFILE: ", updatedProfile);
            res.send(updatedProfile);
          });
      });
    }
  });
};
// exports.post = (req, res) => {
//   console.log({ password: req.body.password, token: req.body.token });
//   models.MentorRegistrations.findOne({
//     where: { passwordResetToken: req.body.token }
//   }).then(mentor => {
//     if (!mentor) {
//       models.MenteeRegistrations.findOne({
//         where: { passwordResetToken: req.body.token }
//       }).then(mentee => {
//         if (!mentee) {
//           res.status(422).send("Invalid password token.");
//         } else {
//           hashPassword(req.body.password).then(password => {
//             models.MenteeRegistrations.update(
//               {
//                 password: password,
//                 passwordResetToken: null
//               },
//               {
//                 returning: true,
//                 where: { passwordResetToken: req.body.token }
//               }
//             ).then(([rowsUpdate, [updatedProfile]]) => {
//               console.log("UPDATED PROFILE: ", updatedProfile);
//               resetPasswordEmail(updatedProfile, req);
//               res.status(422).send({
//                 type: "success",
//                 message: "Your password has been updated, please sign in!"
//               });
//             });
//           });
//         }
//       });
//     } else {
//       hashPassword(req.body.password).then(password => {
//         models.MentorRegistrations.update(
//           {
//             password: password,
//             passwordResetToken: null
//           },
//           { returning: true, where: { passwordResetToken: req.body.token } }
//         ).then(([rowsUpdate, [updatedProfile]]) => {
//           console.log("UPDATED PROFILE: ", updatedProfile);
//           resetPasswordEmail(updatedProfile, req);
//           res.status(422).send({
//             type: "success",
//             message: "Your password has been updated, please sign in!"
//           });
//         });
//       });
//     }
//   });
// };

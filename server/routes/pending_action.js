const models = require("../models");
const getModelFromType = require("../utils/model_type");
const acceptanceEmail = require("../utils/email_templates/acceptance_email");
const rejectionEmail = require("../utils/email_templates/rejection_email");

exports.put = (req, res) => {
  const { email, status } = req.body;
  console.log("email: ", email);
  Promise.all([
    models.MentorRegistrations.findOne({
      where: { email }
    }),
    models.MenteeRegistrations.findOne({
      where: { email }
    })
  ]).then(data => {
    if (data.every(x => x === null)) {
      return res.status(422).send({
        type: "error",
        message: "User does not exists, please create an account."
      });
    }
    const user = data.filter(each => {
      return each !== null;
    });
    console.log("USER: ", user);
    const type = getModelFromType(user[0].accountType.toLowerCase());
    console.log("TYPE: ", type);
    models[type]
      .update({ status }, { returning: true, where: { id: user[0].id } })
      .then(([rowsUpdate, [updatedProfile]]) => {
        console.log("UPDATED PROFILEEE: ", updatedProfile);
        if (updatedProfile.status === "Accept") {
          acceptanceEmail(updatedProfile);
          return res.send({
            type: "success",
            message: `${updatedProfile.firstName} ${
              updatedProfile.lastName
            } has been accepted onto the platform. They will be notified.`
          });
        }
        if (updatedProfile.status === "Reject") {
          rejectionEmail(updatedProfile);
          models[type]
            .destroy({
              where: {
                email: updatedProfile.email
              }
            })
            .then(affectedRows => {
              res.send({
                type: "success",
                message: `${updatedProfile.firstName} ${
                  updatedProfile.lastName
                } has been rejected from joining your platform. They will be notified.`
              });
            });
        }
      });
  });
};

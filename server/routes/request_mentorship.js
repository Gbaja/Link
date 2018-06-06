const models = require("../models");
const mentorRequestNotification = require("../utils/email_templates/mentor_request");

exports.post = (req, res) => {
  const {
    cv,
    shadow,
    interview,
    job,
    postgrad,
    career,
    MenteeRegistrationId,
    requestMessage,
    MentorRegistrationId
  } = req.body;

  models.Requests.findOne({
    where: {
      MenteeRegistrationId: MenteeRegistrationId,
      MentorRegistrationId: MentorRegistrationId
    }
  }).then(request => {
    if (request) {
      return res.status(422).send({
        type: "error",
        message:
          "It seems you have already requested mentorship from this mentor before. Please check your requests for the status of the request"
      });
    } else {
      models.Requests.create({
        cv,
        shadow,
        interview,
        job,
        postgrad,
        career,
        requestMessage,
        MentorRegistrationId,
        MenteeRegistrationId,
        status: "Pending"
      }).then(data => {
        console.log("REQUEST MENTORSHIP DATA: ", data);
        models.MentorRegistrations.findOne({
          where: { id: data.MenteeRegistrationId }
        }).then(mentor => {
          mentorRequestNotification(mentor);
          res.send({ type: "success", message: "Your request has been sent." });
        });
      });
    }
  });
};

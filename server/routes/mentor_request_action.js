const models = require("../models");
const mentorRequestAcceptEmail = require("../utils/email_templates/mentor_request_accept");
const menteeReqestUpdate = require("../utils/email_templates/mentee_request_update");

exports.put = (req, res) => {
  console.log("BODY: ", req.body.requestId);
  const { requestId, status } = req.body;
  models.Requests.update(
    { status },
    { returning: true, where: { id: requestId } }
  ).then(([rowsUpdate, [updatedRequest]]) => {
    if (
      updatedRequest.status === "Accept" ||
      updatedRequest.status === "Reject"
    ) {
      console.log("ACTIONNNN : ", updatedRequest);
      Promise.all([
        models.MenteeRegistrations.findOne({
          where: { id: updatedRequest.MenteeRegistrationId }
        }),
        models.MentorRegistrations.findOne({
          where: { id: updatedRequest.MentorRegistrationId }
        })
      ]).then(([mentee, mentor]) => {
        const data = {
          menteeFirstName: mentee.firstName,
          menteeLastName: mentee.lastName,
          menteeEmail: mentee.email,
          mentorFirstName: mentor.firstName,
          mentorLastName: mentor.lastName,
          mentorEmail: mentor.email,
          status: updatedRequest.status
        };
        menteeReqestUpdate(data);
        if (updatedRequest.status === "Accept") {
          mentorRequestAcceptEmail(data);
        }
        return res.send({
          type: "success",
          message: `The mentor has been notified`
        });
      });
    }
  });
};

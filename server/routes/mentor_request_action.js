const models = require("../models");
const mentorRequestActionNotification = require("../utils/email_templates/mentor_request_action");

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
      models.MenteeRegistrations.findOne({
        where: { id: updatedRequest.MenteeRegistrationId }
      }).then(mentee => {
        mentorRequestActionNotification(mentee);
        return res.send({
          type: "success",
          message: `The mentor has been notified`
        });
      });
    }
  });
};

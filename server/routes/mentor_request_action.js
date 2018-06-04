const models = require("../models");

exports.put = (req, res) => {
  console.log("BODY: ", req.body.requestId);
  const { requestId, status } = req.body;
  models.Requests.findOne({ where: { id: requestId } }).then(data => {
    models.Requests.update(
      { status },
      { returning: true, where: { id: requestId } }
    ).then(([rowsUpdate, [updatedProfile]]) => {
      if (
        updatedProfile.status === "Accept" ||
        updatedProfile.status === "Reject"
      ) {
        console.log("ACTIONNNN : ", updatedProfile);
        return res.send({
          type: "success",
          message: `The mentor has been notified`
        });
      }
    });
  });
};

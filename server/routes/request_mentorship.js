const models = require("../models");

exports.post = (req, res) => {
  const { menteeEmail, requestMessage, mentorId } = req.body;
  models.MentorRegistrations.findOne({ where: { id: mentorId } }).then(
    mentor => {
      models.Requests.create({
        menteeEmail,
        requestMessage,
        mentorEmail: mentor.email
      }).then(data => {
        res.send("Your request has been sent.");
      });
    }
  );
};

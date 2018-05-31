const models = require("../models");

exports.post = (req, res) => {
  const {
    cv,
    shadow,
    interview,
    job,
    postgrad,
    career,
    menteeEmail,
    requestMessage,
    mentorId
  } = req.body;
  models.MentorRegistrations.findOne({ where: { id: mentorId } }).then(
    mentor => {
      models.Requests.create({
        cv,
        shadow,
        interview,
        job,
        postgrad,
        career,
        menteeEmail,
        requestMessage,
        mentorEmail: mentor.email
      }).then(data => {
        console.log("REQUEST MENTORSHIP DATA: ", data);
        res.send({ type: "success", message: "Your request has been sent." });
      });
    }
  );
};

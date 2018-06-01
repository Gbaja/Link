const models = require("../models");

exports.get = (req, res) => {
  const MentorRegistrationId = req.query.MentorRegistrationId;

  models.Requests.findAll({
    where: { MentorRegistrationId: MentorRegistrationId },
    include: [
      {
        model: models.MenteeRegistrations
      }
    ]
  }).then(data => {
    //res.send(data);
    const dataToSend = data.map(each => {
      return {
        requestId: each.id,
        cv: each.cv,
        shadow: each.shadow,
        interview: each.interview,
        job: each.job,
        postgrad: each.postgrad,
        career: each.career,
        requestMessage: each.requestMessage,
        status: each.status,
        createdAt: each.createdAt,
        menteeFirstName: each.MenteeRegistration.firstName,
        menteeLastName: each.MenteeRegistration.lastName,
        menteeAccountType: each.MenteeRegistration.accountType,
        menteeId: each.MenteeRegistration.id
      };
    });
    res.send(dataToSend);
  });
};

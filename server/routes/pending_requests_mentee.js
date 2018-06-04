const models = require("../models");

exports.get = (req, res) => {
  const MenteeRegistrationId = req.query.MenteeRegistrationId;

  models.Requests.findAll({
    where: { MenteeRegistrationId: MenteeRegistrationId },
    include: [
      {
        model: models.MentorRegistrations
      }
    ],
    order: [[("DESC", "status")]]
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
        mentorFirstName: each.MentorRegistration.firstName,
        mentorLastName: each.MentorRegistration.lastName,
        mentorAccountType: each.MentorRegistration.accountType,
        mentorId: each.MentorRegistration.id
      };
    });
    console.log(dataToSend);
    res.send(dataToSend);
  });
};

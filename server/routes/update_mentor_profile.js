const models = require("../models");

exports.put = (req, res) => {
  const { cv, careerPlanning, jobsAndInterview } = req.body;
  return models.MentorRegistrations.update(
    {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      accountType: req.body.accountType,
      currentRole: req.body.currentRole,
      currentCompany: req.body.currentCompany,
      age: req.body.age,
      biography: req.body.biography,
      offerTags: req.body.offerTags,
      motivation: req.body.motivation
    },
    { returning: true, where: { id: req.params.id } }
  )
    .then(([rowsUpdate, [updatedProfile]]) => {
      res.json(updatedProfile);
      models.MentorOfferings.findOne({
        where: { mentorId: updatedProfile.id }
      }).then(existingMentor => {
        if (existingMentor) {
          return models.MentorOfferings.update(
            {
              careerPlanning: req.body.careerPlanning,
              cv: req.body.cv,
              jobsAndInterview: req.body.jobsAndInterview
            },
            { returning: true, where: { mentorId: updatedProfile.id } }
          );
        } else {
          const mentorId = updatedProfile.id;
          return models.MentorOfferings.create({
            cv,
            careerPlanning,
            jobsAndInterview,
            mentorId
          }).then(data => {
            console.log(data);
          });
        }
      });
    })
    .catch(err => {
      console.log("My profile error: ", err);
    });
};

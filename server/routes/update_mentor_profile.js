const models = require("../models");

exports.put = (req, res) => {
  const {
    cv,
    careerPlanning,
    jobsAndInterview,
    developSkills,
    understandingYoungPeople,
    rewarding
  } = req.body;
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
          models.MentorOfferings.update(
            {
              careerPlanning: req.body.careerPlanning,
              cv: req.body.cv,
              jobsAndInterview: req.body.jobsAndInterview
            },
            { returning: true, where: { mentorId: updatedProfile.id } }
          );
        } else {
          const mentorId = updatedProfile.id;
          models.MentorOfferings.create({
            cv,
            careerPlanning,
            jobsAndInterview,
            mentorId
          });
        }
      });
      models.MentorMotivations.findOne({
        where: { mentorId: updatedProfile.id }
      }).then(motivationExistingMentor => {
        if (motivationExistingMentor) {
          console.log("EXISTING MENTOR TWO");
          models.MentorMotivations.update(
            {
              developSkills: req.body.developSkills,
              understandingYoungPeople: req.body.understandingYoungPeople,
              rewarding: req.body.rewarding
            },
            { returning: true, where: { mentorId: updatedProfile.id } }
          );
        } else {
          const mentorId = updatedProfile.id;
          models.MentorMotivations.create({
            developSkills,
            understandingYoungPeople,
            rewarding,
            mentorId
          });
        }
      });
    })
    .catch(err => {
      console.log("My profile error: ", err);
    });
};

const models = require("../models");
const { mentorDetails } = require("../utils/details");

exports.put = (req, res) => {
  return models.MentorRegistrations.update(
    {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      accountType: req.body.accountType,
      universityName: req.body.universityName,
      degree: req.body.degree,
      currentRole: req.body.currentRole,
      currentCompany: req.body.currentCompany,
      currentIndustry: req.body.currentIndustry,
      location: req.body.location,
      age: req.body.age,
      biography: req.body.biography,
      offer: req.body.offer,
      motivation: req.body.motivation,
      socialMediaUrl: req.body.socialMediaUrl,
      status: req.body.status
    },
    { returning: true, where: { email: req.body.email } }
  )
    .then(([rowsUpdate, [updatedProfile]]) => {
      console.log("MENTOR UPDATE RES: ", updatedProfile);
      res.send(mentorDetails(updatedProfile));
    })
    .catch(err => {
      console.log("My profile error: ", err);
    });
};

const models = require("../models");

exports.put = (req, res) => {
  console.log("body: ", req.body);
  console.log("ID: ", req.params.id);
  return models.MenteeRegistrations.update(
    {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      location: req.body.location,
      currentMotive: req.body.currentMotive,
      age: req.body.age,
      socialMediaUrl: req.body.socialMediaUrl,
      biography: req.body.biography,
      reason: req.body.reason,
      mentorIndustry: req.body.mentorIndustry,
      universityName: req.body.universityName,
      degree: req.body.degree,
      status: req.body.status
    },
    { returning: true, where: { email: req.body.email } }
  ).then(([rowsUpdate, [updatedProfile]]) => {
    res.send(updatedProfile);
  });
};

const models = require("../models");

exports.put = (req, res) => {
  console.log("body: ", req.body);
  console.log("ID: ", req.params.id);
  return models.MenteeRegistrations.update(
    {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      baseArea: req.body.baseArea,
      currentMotive: req.body.currentMotive,
      age: req.body.age,
      biography: req.body.biography,
      reason: req.body.reason,
      mentorIndustry: req.body.mentorIndustry
    },
    { returning: true, where: { email: req.body.email } }
  ).then(([rowsUpdate, [updatedProfile]]) => {
    res.send(updatedProfile);
  });
};

const models = require("../models");

exports.put = (req, res) => {
  return models.MentorRegistrations.update(
    {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      accountType: req.body.accountType,
      currentRole: req.body.currentRole,
      currentCompany: req.body.currentCompany,
      age: req.body.age,
      biography: req.body.biography,
      offer: req.body.offerTags,
      motivation: req.body.motivation
    },
    { returning: true, where: { email: req.body.email } }
  )
    .then(([rowsUpdate, [updatedProfile]]) => {
      console.log("MENTOR UPDATE RES: ", updatedProfile);
      res.json(updatedProfile);
    })
    .catch(err => {
      console.log("My profile error: ", err);
    });
};

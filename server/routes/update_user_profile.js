const models = require("../models");

exports.put = (req, res) => {
  return models.Registration.update(
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
    .then(([rowsUpdate, [updatedProfile]]) => res.json(updatedProfile))
    .catch(err => {
      console.log("My profile error: ", err);
    });
};

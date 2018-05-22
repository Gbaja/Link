const models = require("../models");
const { details } = require("../utils/details");
const getModelFromType = require("../utils/model_type");

exports.put = (req, res) => {
  const {
    firstName,
    lastName,
    email,
    location,
    gender,
    ethnicity,
    imageUrl,
    universityName,
    degree,
    graduationYear,
    jobTitle,
    company,
    dateStarted,
    endDate,
    industry,
    biography,
    reason,
    socialMediaUrl,
    availability,
    createdAt
  } = req.body;
  const type = getModelFromType(req.body.accountType.toLowerCase());
  Promise.all([
    models.MentorRegistrations.findOne({
      where: { email: email.toLowerCase() }
    }),
    models.MenteeRegistrations.findOne({
      where: { email: email.toLowerCase() }
    })
  ]).then(([mentor, mentee]) => {
    if (mentor || mentee) {
      models[type]
        .update(
          {
            firstName,
            lastName,
            location,
            gender,
            ethnicity,
            imageUrl,
            degree,
            graduationYear,
            jobTitle,
            company,
            dateStarted,
            endDate,
            industry,
            biography,
            reason,
            socialMediaUrl,
            availability,
            createdAt
          },
          { returning: true, where: { email: req.body.email } }
        )
        .then(([rowsUpdate, [updatedProfile]]) => {
          res.send(details(updatedProfile));
        });
    } else {
      res.status(422).send({ type: "error", message: "User does not exists." });
    }
  });
};

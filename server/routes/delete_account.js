const models = require("../models");
const getModelFromType = require("../utils/model_type");

exports.delete = (req, res) => {
  const { email } = req.body;
  Promise.all([
    models.MenteeRegistrations.findOne({ where: { email } }),
    models.MentorRegistrations.findOne({ where: { email } }),
    models.Universities.findOne({ where: { email } })
  ]).then(data => {
    if (data.every(x => x === null)) {
      return res.status(422).send({
        type: "error",
        message: "User does not exists."
      });
    } else {
      const user = data.filter(each => {
        return each !== null;
      });
      const type = getModelFromType(user[0].accountType.toLowerCase());
      console.log("TYPE: ", type);
      return models[type]
        .destroy({
          where: {
            email: email
          },
          cascade: true
        })
        .then(affectedRows => {
          res.send({ type: "success", message: "Account deleted." });
        });
    }
  });
};

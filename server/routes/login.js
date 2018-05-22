const bcrypt = require("bcryptjs");
const models = require("../models");
const { details } = require("../utils/details");

const isValidPassword = function(userpass, password) {
  return bcrypt.compareSync(password, userpass);
};
exports.post = (req, res) => {
  const { email, password } = req.body;
  Promise.all([
    models.MenteeRegistrations.findOne({ where: { email } }),
    models.MentorRegistrations.findOne({ where: { email } }),
    models.Universities.findOne({ where: { email } })
  ]).then(data => {
    if (data[2] !== null) {
      req.session.user_id = data[2].id;
      res.send(data[2]);
    } else if (data.every(x => x === null)) {
      res.status(422).send({
        type: "error",
        message: "User does not exists, please create an account."
      });
    } else {
      const user = data.filter(each => {
        return each !== null;
      });
      if (!isValidPassword(user[0].password, password)) {
        res.status(422).send({
          type: "error",
          message: "Password incorrect."
        });
      } else {
        req.session.user_id = user[0].id;
        res.send(details(user[0]));
      }
    }
  });
};

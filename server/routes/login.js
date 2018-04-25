const bcrypt = require("bcryptjs");
const models = require("../models");

const isValidPassword = function(userpass, password) {
  return bcrypt.compareSync(password, userpass);
};

exports.post = (req, res) => {
  const { email, password } = req.body;
  return models.Registration.findOne({ where: { email } })
    .then(user => {
      if (!user) {
        res.status(422).send("User does not exists, please create an account.");
      } else if (!isValidPassword(user.password, password)) {
        res.status(422).send("Password incorrect");
      } else {
        req.session.user_id = user.id;
        console.log("LOG IN COOKIE: ", req.session);
        res.send(user);
      }
    })
    .catch(err => {
      console.log("LOG IN ROUTE ERROR: ", err);
    });
};

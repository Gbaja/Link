const bcrypt = require("bcryptjs");
const models = require("../models");

const isValidPassword = function(userpass, password) {
  return bcrypt.compareSync(password, userpass);
};

exports.post = (req, res) => {
  const { email, password } = req.body;
  return models.MentorRegistrations.findOne({ where: { email } })
    .then(mentor => {
      if (!mentor) {
        return models.MenteeRegistrations.findOne({ where: { email } }).then(
          mentee => {
            if (!mentee) {
              res
                .status(422)
                .send("User does not exists, please create an account.");
            } else if (!isValidPassword(mentee.password, password)) {
              res.status(422).send("Password incorrect");
            } else {
              req.session.mentee_id = mentee.id;
              req.session.accountType = mentee.accountType;
              console.log("LOG IN COOKIE: ", req.session);
              return res.send(mentee);
            }
          }
        );
      } else if (!isValidPassword(mentor.password, password)) {
        res.status(422).send("Password incorrect");
      } else {
        req.session.mentor_id = mentor.id;
        console.log("LOG IN COOKIE: ", req.session);
        return res.send(mentor);
      }
    })
    .catch(err => {
      console.log("LOG IN ROUTE ERROR: ", err);
    });
};

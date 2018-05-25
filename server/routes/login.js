const models = require("../models");
const { details } = require("../utils/details");
const { isValidPassword } = require("../utils/hash_password");

exports.post = (req, res) => {
  const { email, password } = req.body;
  Promise.all([
    models.MenteeRegistrations.findOne({ where: { email } }),
    models.MentorRegistrations.findOne({ where: { email } }),
    models.Universities.findOne({ where: { email } }),
    models.Admins.findOne({ where: { email } })
  ]).then(data => {
    if (data.every(x => x === null)) {
      return res.status(422).send({
        type: "error",
        message: "User does not exists, please create an account."
      });
    }
    const user = data.filter(each => {
      return each !== null;
    });
    console.log("USERRRR: ", user[0]);
    if (user[0].accountType === "Admin") {
      req.session.user_id = user[0].id;
      res.send({
        name: user[0].name,
        email: user[0].email,
        accountType: user[0].accountType
      });
    } else {
      if (user[0].password === null) {
        return res.status(422).send({
          type: "error",
          message: "Please make sure you have reset your password."
        });
      }
      if (!isValidPassword(user[0].password, password)) {
        return res.status(422).send({
          type: "error",
          message: "Password incorrect."
        });
      } else {
        req.session.user_id = user[0].id;
        if (user[0].accountType === "University") {
          return res.send({
            universityName: user[0].universityName,
            email: user[0].email,
            accountType: user[0].accountType
          });
        } else {
          if (user[0].status === "Pending") {
            return res.status(422).send({
              type: "error",
              message:
                "Your university has not accepted your application. Please wait till you receive a confirmation email before logging in."
            });
          } else {
            return res.send(details(user[0]));
          }
        }
      }
    }
  });
};

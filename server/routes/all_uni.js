const models = require("../models");

exports.get = (req, res) => {
  models.Universities.findAll().then(unis => {
    console.log("UNIVERSITIESSSSS:::: ", unis);
    const universities = unis.map(each => {
      return each.universityName;
    });
    console.log(universities);
    res.send(universities);
  });
};

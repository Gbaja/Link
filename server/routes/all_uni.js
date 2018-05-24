const models = require("../models");

exports.get = (req, res) => {
  models.Universities.findAll().then(unis => {
    const universities = unis.map(each => {
      return each.name;
    });
    res.send(universities);
  });
};

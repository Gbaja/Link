const models = require("../models");

exports.get = (req, res) => {
  Promise.all([
    models.MenteeRegistrations.findAll({
      where: { universityName: req.params.universityName }
    }),
    models.MentorRegistrations.findAll({
      where: { universityName: req.params.universityName }
    })
  ]).then(([mentee, mentor]) => {
    console.log([mentee, mentor]);
    const allData = mentee.concat(mentor);
    // const dataNeeded = allData.map(each => {
    //   return details(each);
    // });
    // const data = {
    //   count: allData.length,
    //   rows: dataNeeded
    // };
    res.send(allData);
  });
};

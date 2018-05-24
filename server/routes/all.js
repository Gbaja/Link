const models = require("../models");
const getModelFromType = require("../utils/model_type");
const { details } = require("../utils/details");

function paginate(array, page_size, page_number) {
  --page_number; // because pages logically start with 1, but technically with 0
  return array.slice(page_number * page_size, (page_number + 1) * page_size);
}

exports.get = (req, res) => {
  Promise.all([
    models.MenteeRegistrations.findAll({
      where: { universityName: req.params.universityName }
    }),
    models.MentorRegistrations.findAll({
      where: { universityName: req.params.universityName }
    })
  ]).then(([mentee, mentor]) => {
    const allData = mentee.concat(mentor);
    console.log(allData);
    const dataNeeded = allData.map(each => {
      return details(each);
    });
    const data = {
      count: allData.length,
      rows: dataNeeded
    };
    res.send(paginate(data.rows, 1, req.params.pageNumber));
  });
};

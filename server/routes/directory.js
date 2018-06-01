const Sequelize = require("sequelize");

const Op = Sequelize.Op;
const models = require("../models");
const getModelFromType = require("../utils/model_type");
const { details } = require("../utils/details");

exports.get = (req, res) => {
  const { pageNum, accountType, universityName } = req.params;
  const type = getModelFromType(accountType.toLowerCase());
  console.log("QUERYYYYY: ", req.query);
  const name = req.query.name || "";
  const location = req.query.location || "";
  const industry = req.query.industry || "";
  //console.log("NAME: ", name);
  return models[type]
    .findAndCountAll({
      where: {
        universityName,
        status: "Accept",
        [Op.or]: [
          { firstName: { [Op.iLike]: name + "%" } },
          { lastName: { [Op.iLike]: name + "%" } }
        ],
        location: {
          [Op.iLike]: location + "%"
        },
        industry: {
          [Op.iLike]: industry + "%"
        }
      },
      limit: 1,
      offset: (pageNum - 1) * 1
    })
    .then(data => {
      const dataToSend = {
        count: data.count,
        rows: data.rows.map(each => {
          return details(each);
        })
      };
      console.log("DIRECTORY: ", dataToSend);
      res.send(dataToSend);
    });
};

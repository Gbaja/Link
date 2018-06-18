const models = require("../models");

exports.get = (req, res) => {
  const { universityName } = req.params;
  console.log(universityName);
  Promise.all([
    models.MenteeRegistrations.findAll({
      where: { universityName, status: "Pending" }
    }),
    models.MentorRegistrations.findAll({
      where: { universityName, status: "Pending" }
    })
  ]).then(([mentee, mentor]) => {
    // console.log("PENDING : ", [mentee, mentor]);
    const allData = mentee.concat(mentor);
    const data = allData.map(person => {
      return {
        id: person.id,
        firstName: person.firstName,
        lastName: person.lastName,
        email: person.email,
        universityName: person.universityName,
        accountType: person.accountType
      };
    });
    console.log("PENDING APPLICATIONS: ", data);
    res.send(data);
  });
};

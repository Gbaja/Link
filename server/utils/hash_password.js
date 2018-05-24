const bcrypt = require("bcryptjs");

const hashPassword = password =>
  new Promise((resolve, reject) => {
    bcrypt.hash(password, 10, (err, hash) => {
      if (err) {
        reject(err);
      } else {
        resolve(hash);
      }
    });
  });
const isValidPassword = function(userpass, password) {
  return bcrypt.compareSync(password, userpass);
};
module.exports = { hashPassword, isValidPassword };

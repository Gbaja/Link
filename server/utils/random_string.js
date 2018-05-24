const generateString = () => {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  let randomString = "";
  for (let i = 0; i < 6; i++) {
    randomString += letters.charAt(Math.floor(Math.random() * letters.length));
  }
  return randomString;
};

module.exports = generateString;

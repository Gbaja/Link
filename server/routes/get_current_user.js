exports.get = (req, res) => {
  const userDetails = {
    user_id: req.session.user_id,
    accountType: req.session.accountType
  };
  if (req.session.user_id) {
    console.log("CURRENT USER: ", userDetails);
    return res.send(userDetails);
  } else {
    return res.send(null);
  }
};

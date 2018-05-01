exports.get = (req, res) => {
  const userDetails = {
    user_id: req.session.user_id
  };
  if (req.session.user_id) {
    console.log("CURRENT USER: ", userDetails);
    return res.send(userDetails);
  } else {
    return res.send(null);
  }
};

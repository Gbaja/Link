exports.get = (req, res) => {
  console.log("before", req.session);
  req.session = null;
  console.log("out: ", req.session);
  res.send(true);
};

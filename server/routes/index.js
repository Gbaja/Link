const express = require("express");

const router = express.Router();

const signup = require("./signup");
const login = require("./login");
const logout = require("./logout");
const myProfile = require("./fetch_user_profile");
const updateProfile = require("./update_user_profile");

router.get("/", (req, res) => {
  res.send("heyyy");
});

router.post("/api/signup", signup.post);
router.post("/api/login", login.post);
router.get("/api/logout", logout.get);
router.get("/api/myprofile/:id", myProfile.get);
router.put("/api/updateProfile/:id", updateProfile.put);

module.exports = router;

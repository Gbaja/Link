const express = require("express");

const router = express.Router();

const signupMentor = require("./signup_mentor");
const signupMentee = require("./signup_mentee");
const login = require("./login");
const logout = require("./logout");
const mentorProfile = require("./fetch_mentor_profile");
const menteeProfile = require("./fetch_mentee_profile");
const updateMentorProfile = require("./update_mentor_profile");
const updateMenteeProfile = require("./update_mentee_profile");
const getCurrentUser = require("./get_current_user");

router.get("/", (req, res) => {
  res.send("heyyy");
});

router.post("/api/signupMentor", signupMentor.post);
router.post("/api/signupMentee", signupMentee.post);
router.post("/api/login", login.post);
router.get("/api/logout", logout.get);
router.get("/api/mentorProfile/:id", mentorProfile.get);
router.get("/api/menteeProfile/:id", menteeProfile.get);
router.put("/api/updateMentorProfile/:id", updateMentorProfile.put);
router.put("/api/updateMenteeProfile/:id", updateMenteeProfile.put);
router.get("/api/currentUser", getCurrentUser.get);

module.exports = router;

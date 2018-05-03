const express = require("express");

const router = express.Router();

const signupMentor = require("./signup_mentor");
const signupMentee = require("./signup_mentee");
const login = require("./login");
const logout = require("./logout");
const updateMentorProfile = require("./update_mentor_profile");
const updateMenteeProfile = require("./update_mentee_profile");
const getCurrentUser = require("./get_current_user");
const getMentors = require("./get_mentors");

router.post("/api/signupMentor", signupMentor.post);
router.post("/api/signupMentee", signupMentee.post);
router.post("/api/login", login.post);
router.get("/api/logout", logout.get);
router.put("/api/updateMentorProfile", updateMentorProfile.put);
router.put("/api/updateMenteeProfile", updateMenteeProfile.put);
router.get("/api/currentUser", getCurrentUser.get);
router.get("/api/getMentors/:pageNum", getMentors.get);

module.exports = router;

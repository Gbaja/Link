const express = require("express");

const router = express.Router();

const signup = require("./signup");
const login = require("./login");
const logout = require("./logout");
const updateMentorProfile = require("./update_mentor_profile");
const updateMenteeProfile = require("./update_mentee_profile");
const getMentors = require("./get_mentors");
const getMentees = require("./get_mentees");
const forgotPassword = require("./forgot_password");
const resetPassword = require("./reset_password");
const individualProfile = require("./individual_profile");
const deleteAccount = require("./delete_account");

router.post("/api/signupMentor", signup.post);
router.post("/api/signupMentee", signup.post);
router.post("/api/login", login.post);
router.get("/api/logout", logout.get);
router.put("/api/updateMentorProfile", updateMentorProfile.put);
router.put("/api/updateMenteeProfile", updateMenteeProfile.put);
router.get("/api/getMentors/:pageNum", getMentors.get);
router.get("/api/getMentees/:pageNum", getMentees.get);
router.post("/api/forgotPassword", forgotPassword.post);
router.post("/api/resetPassword", resetPassword.post);
router.get("/api/profile/:id/:accountType", individualProfile.get);
router.delete("/api/delete", deleteAccount.delete);

module.exports = router;

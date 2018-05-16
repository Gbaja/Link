const express = require("express");

const router = express.Router();

const signupMentor = require("./signup_mentor");
const signupMentee = require("./signup_mentee");
const login = require("./login");
const logout = require("./logout");
const updateMentorProfile = require("./update_mentor_profile");
const updateMenteeProfile = require("./update_mentee_profile");
const getMentors = require("./get_mentors");
const getMentees = require("./get_mentees");
const forgotPassword = require("./forgot_password");
const resetPassword = require("./reset_password");
const individualMentorProfile = require("./individual_mentor");
const individualMenteeProfile = require("./individual_mentee");
const deleteAccount = require("./delete_account");

router.post("/api/signupMentor", signupMentor.post);
router.post("/api/signupMentee", signupMentee.post);
router.post("/api/login", login.post);
router.get("/api/logout", logout.get);
router.put("/api/updateMentorProfile", updateMentorProfile.put);
router.put("/api/updateMenteeProfile", updateMenteeProfile.put);
router.get("/api/getMentors/:pageNum", getMentors.get);
router.get("/api/getMentees/:pageNum", getMentees.get);
router.post("/api/forgotPassword", forgotPassword.post);
router.post("/api/resetPassword", resetPassword.post);
router.get("/api/mentorProfile/:id", individualMentorProfile.get);
router.get("/api/menteeProfile/:id", individualMenteeProfile.get);
router.delete("/api/delete", deleteAccount.delete);

module.exports = router;

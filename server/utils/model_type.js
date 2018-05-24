const mentorType = "mentor";
const menteeType = "mentee";
const universityType = "university";
const adminType = "admin";

const getModelFromType = type => {
  if (type === mentorType) {
    return "MentorRegistrations";
  }
  if (type === menteeType) {
    return "MenteeRegistrations";
  }
  if (type === universityType) {
    return "Universities";
  }
  if (type === adminType) {
    return "Admins";
  }
};

module.exports = getModelFromType;

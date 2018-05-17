const mentorType = "mentor";
const menteeType = "mentee";

const getModelFromType = type => {
  if (type === mentorType) {
    return "MentorRegistrations";
  }
  if (type === menteeType) {
    return "MenteeRegistrations";
  }
};

module.exports = getModelFromType;

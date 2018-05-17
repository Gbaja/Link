const mentorDetails = data => {
  const details = {
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    accountType: data.accountType,
    age: data.age,
    location: data.location,
    universityName: data.universityName,
    degree: data.degree,
    currentIndustry: data.currentIndustry,
    currentRole: data.currentRole,
    currentCompany: data.currentCompany,
    biography: data.biography,
    motivation: data.motivation,
    offer: data.offer,
    socialMediaUrl: data.socialMediaUrl,
    status: data.status,
    createdAt: data.createdAt
  };
  return details;
};

const menteeDetails = data => {
  const details = {
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    accountType: data.accountType,
    age: data.age,
    location: data.location,
    universityName: data.universityName,
    degree: data.degree,
    currentMotive: data.currentMotive,
    mentorIndustry: data.mentorIndustry,
    currentCompany: data.currentCompany,
    biography: data.biography,
    reason: data.reason,
    socialMediaUrl: data.socialMediaUrl,
    status: data.status,
    createdAt: data.createdAt
  };
  return details;
};

module.exports = {
  mentorDetails,
  menteeDetails
};

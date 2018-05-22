const details = data => {
  const info = {
    id: data.id,
    accountType: data.accountType,
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    location: data.location,
    gender: data.gender,
    ethnicity: data.ethnicity,
    imageUrl: data.imageUrl,
    universityName: data.universityName,
    degree: data.degree,
    graduationYear: data.graduationYear,
    jobTitle: data.jobTitle,
    company: data.company,
    dateStarted: data.dateStarted,
    endDate: data.endDate,
    industry: data.industry,
    biography: data.biography,
    reason: data.reason,
    socialMediaUrl: data.socialMediaUrl,
    availability: data.availability,
    createdAt: data.createdAt
  };
  return info;
};

module.exports = {
  details
};

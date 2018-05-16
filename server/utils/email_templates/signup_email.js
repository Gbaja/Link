const sgMail = require("@sendgrid/mail");

module.exports = data => {
  sgMail.setApiKey(process.env.SEND_GRID_KEY);
  const msg = {
    to: data.email,
    from: "no-reply@youngandgiving.com",
    subject: "Young&Giving Registration Confirmation",
    html: `<p>Hello ${
      data.firstName
    },</p><p>Thank you signing up to Young & Giving as a ${
      data.accountType
    } .</p>The Young & Giving platform has been designed to allow you to browse through our directory and request mentorship from mentors that matches your interest. You decide who your mentor is based on the profile</p><p>Happy browsing</p><p>The Young & Giving team.`
  };
  sgMail.send(msg);
};

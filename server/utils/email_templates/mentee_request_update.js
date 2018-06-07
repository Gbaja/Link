const sgMail = require("@sendgrid/mail");

module.exports = data => {
  sgMail.setApiKey(process.env.SEND_GRID_KEY);
  const msg = {
    to: data.menteeEmail,
    from: "no-reply@youngandgiving.com",
    subject: "Young & Giving Mentor Request Update",
    html: `<p>Hello ${data.menteeFirstName},</p>
    <p>Your mentorship request from ${data.mentorFirstName} ${
  data.mentorLastName
}accepted a request from has been ${
  data.status
}ed.</p> <p>If it was accepted, you can expect an email from them.</p><p>If it was rejected, don't be disheartened, you can log back on the platform to browse for other mentors.</p><p>Feel free to contact us if you have any questions/issues</p>
    <p>Kind regards,</p><p>The Young & Giving team.`
  };
  sgMail.send(msg);
};

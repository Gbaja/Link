const sgMail = require("@sendgrid/mail");

module.exports = data => {
  sgMail.setApiKey(process.env.SEND_GRID_KEY);
  const msg = {
    to: data.mentorEmail,
    from: "no-reply@youngandgiving.com",
    subject: "Young & Giving Mentor Request Update",
    html: `<p>Hello ${data.mentorFirstName},</p>
    <p>You have just accepted a request from ${data.menteeFirstName} ${
  data.menteeLastName
}.</p> <p>Please contact the mentee via their email below</p><p>${
  data.menteeEmail
}</p><p>We hope you have a good time mentoring.</p><p>Feel free to contact us if you have any questions/issues</p>
    <p>Kind regards,</p><p>The Young & Giving team.`
  };
  sgMail.send(msg);
};

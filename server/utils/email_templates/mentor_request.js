const sgMail = require("@sendgrid/mail");

module.exports = data => {
  sgMail.setApiKey(process.env.SEND_GRID_KEY);
  const msg = {
    to: data.email,
    from: "no-reply@youngandgiving.com",
    subject: "New Young & Giving Mentorship Request",
    html: `<p>Hello ${data.firstName},</p>
    <p>You have a new mentorship request on Young&Giving.</p><p>Click on the link below to find out who it is from</p>
    <p>https://linkmentors.herokuapp.com</p>
    <p>Kind regards,</p><p>The Young & Giving team.`
  };
  sgMail.send(msg);
};

const sgMail = require("@sendgrid/mail");

module.exports = (data, req) => {
  sgMail.setApiKey(process.env.SEND_GRID_KEY);
  const msg = {
    to: data.email,
    from: "no-reply@youngandgiving.com",
    subject: "Young & Giving Password Reset",
    html: `<p>Hello ${data.firstName},</p>
    <p>'This is a confirmation that the password for your account ${
  data.email
} has just been changed.</p><p>The Young & Giving team.`
  };
  sgMail.send(msg);
};

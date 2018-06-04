const sgMail = require("@sendgrid/mail");

module.exports = (data, req) => {
  sgMail.setApiKey(process.env.SEND_GRID_KEY);
  const msg = {
    to: data.email,
    from: "no-reply@youngandgiving.com",
    subject: "Young & Giving Password Reset",
    html: `<p>Hello ${data.firstName},</p>
    <p>You are receiving this because you (or someone else) have requested the reset of the password for your account.</p>
    <p>Please click on the following link, or paste this into your browser to complete the process:</p>
    <p>https://linkmentors.herokuapp.com/?token=${data.passwordResetToken}</p>
    <p>If you did not request this, please ignore this email and your password will remain unchanged.\n'</p><p>The Young & Giving team.`
  };
  sgMail.send(msg);
};

const sgMail = require("@sendgrid/mail");

module.exports = data => {
  sgMail.setApiKey(process.env.SEND_GRID_KEY);
  const msg = {
    to: data.email,
    from: "no-reply@youngandgiving.com",
    subject: "Young&Giving University Account Details",
    html: `<p>To ${
      data.universityName
    },</p><p>Thank you signing up to Young & Giving as a ${
      data.accountType
    } .</p><p>Your account has been created. The email address used to create your account can be found below:</p><p>Email: ${
      data.email
    }</p><p>Please click on the link below to reset your password: </p><p>https://linkmentors.herokuapp.com/reset_password?token=${
      data.passwordResetToken
    }</p><p>Please do contact us if you have any questions.</p><p>The Young & Giving team.</p>`
  };
  sgMail.send(msg);
};

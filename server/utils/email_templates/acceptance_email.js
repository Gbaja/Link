const sgMail = require("@sendgrid/mail");

module.exports = data => {
  sgMail.setApiKey(process.env.SEND_GRID_KEY);
  const msg = {
    to: data.email,
    from: "no-reply@youngandgiving.com",
    subject: "Young & Giving Application Update",
    html: `<p>Hello ${data.firstName},</p>
    <p>Your application to join the Young & Giving's {data.universityName} platform has been accepted. Click on the link below to up log in to your account</p><p>https://linkmentors.herokuapp.com/</p><p>Happy browsing!</p><p>The Young & Giving team</p>
   `
  };
  sgMail.send(msg);
};

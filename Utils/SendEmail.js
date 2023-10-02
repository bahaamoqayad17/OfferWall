const nodemailer = require("nodemailer");

const SendEmail = async (to, subject, text) => {
  const transporter = nodemailer.createTransport({
    host: "server63.web-hosting.com",
    port: 465,
    secure: true,

    auth: {
      user: "bahae@ankitfly.com",
      pass: "j-lhaG(Ha^t%",
    },
  });

  transporter
    .verify()
    .then((data) => console.log(data))
    .catch((error) => console.log(error));

  const mailOptions = {
    from: "AdZirc",
    to,
    subject,
    text,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

module.exports = SendEmail;

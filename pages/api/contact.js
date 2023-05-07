export default function handler(req, res) {
  let nodemailer = require("nodemailer");
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.APP_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject: "VBSB|Client Message",
    text: `Dear VBSB,

    I hope this message finds you well. I am writing to inquire about Querying about your services. I came across your website and was impressed with your products/services, and I have some questions that I would like to ask before making a purchase.
    
    ${message}
    You can contact me at ${email}
    I would appreciate any information or guidance you could provide. Please let me know if there are any additional details you require from me.
    
    Thank you for your time and assistance.
    
    Best regards,
    
    ${name}`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.status(400).json({ message: `Error in sending Message 😓` });
    } else {
      res
        .status(200)
        .json({ message: `Your message sented successfully to VBSB! 🥳 ` });
    }
  });
}

export default function handler(req, res) {
  let nodemailer = require("nodemailer");
  const { name, email, message, position, phone } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.HR_EMAIL,
      pass: process.env.HR_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.HR_EMAIL,
    to: process.env.HR_EMAIL,
    subject: `Application for ${position} - ${name}`,

    text: `Application for ${position}

    Personal Details:
    - Name: ${name}
    - Phone Number: ${phone}
    
    Position Applied For:
    - {position}
    
    
    Message to HR:
    - ${message}
    
    Thank you for considering my application. Please feel free to contact me at [Your Phone Number] or reply to this email for further details.
    
    Best regards,
    ${name}
    ${email}
    ${phone}
    `,
    html: `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Job Application</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                margin: 20px;
                background-color: #f4f4f4;
                color: #333;
            }
            .container {
                background: #fff;
                padding: 20px;
                max-width: 600px;
                margin: auto;
                border-radius: 10px;
            }
            .header {
                font-size: 20px;
                font-weight: bold;
                margin-bottom: 20px;
            }
            .section {
                margin-bottom: 20px;
            }
            .label {
                font-weight: bold;
            }
            .footer {
                font-size: 14px;
                margin-top: 30px;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <p class="header">Application for ${position}</p>
            <div class="section">
                <p class="label">Personal Details:</p>
                <p>Name: ${name}</p>
                <p>Phone Number: ${phone}</p>
            </div>
            <div class="section">
                <p class="label">Position Applied For:</p>
                <p>${position}</p>
            </div>
            <div class="section">
                <p class="label">Message to HR:</p>
                <p>${message}</p>
            </div>
            <p class="footer">
                Thank you for considering my application. Please feel free to contact me at ${phone} or reply to this email for further details.
                <br><br>
                Best regards,<br>
                ${name}<br>
                ${email}<br>
                ${phone}
            </p>
        </div>
    </body>
    </html>
    `,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.status(400).json({ message: `Error in sending Message 😓` });
    } else {
      res.status(200).json({
        message: `Your message to HR is sented successfully to VBSB! 🥳 `,
      });
    }
  });
}

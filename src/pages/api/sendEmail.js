// import nodemailer from "nodemailer";

// export default async function handler(req, res) {
//   if (req.method !== "POST") {
//     return res.status(405).json({ error: "Method Not Allowed" });
//   }

//   const { firstName, lastName, email, message } = req.body;

//   // Create a transporter
//   // const transporter = nodemailer.createTransport({
//   //   service: "gmail",
//   //   auth: {
//   //     user: process.env.EMAIL_USER, // Your email
//   //     pass: process.env.EMAIL_PASS, // Your app password
//   //   },
//   // });

//   const transporter = nodemailer.createTransport({
//     host: "smtp.gmail.com",
//     port: 465,
//     secure: true,
//     auth: {
//       user: process.env.SMTP_USER, // Your Gmail
//       pass: process.env.SMTP_PASS, // Your App Password
//     },
//   });

//   try {
//     const mailOptions = {
//       from: process.env.EMAIL_USER,
//       to: "sohan.wdt@gmail.com", // Replace with your recipient email
//       subject: "New Contact Form Submission",
//       text: `
//         Name: ${firstName} ${lastName}
//         Email: ${email}
//         Message: ${message}
//       `,
//     };

//     await transporter.sendMail(mailOptions);

//     res.status(200).json({ success: true, message: "Email sent successfully!" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ success: false, message: "Failed to send email." });
//   }
// }

import nodemailer from "nodemailer";

export default async function handler(req, res) {
  console.log("🚀 ~ req:", req)
  // if (req.method !== "POST") {
  //   return res.status(405).json({ message: "Method Not Allowed" });
  // }

  const { firstName, lastName, email, message } = req.body;

  // Ensure environment variables are loaded
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    return res.status(500).json({ success: false, message: "SMTP credentials are missing" });
  }

  // Configure Nodemailer Transporter
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: true, // Use true for port 465, false for 587
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    const mailOptions = {
      from: `"${firstName} ${lastName}" <${email}>`,
      to: "sohan.wdt@gmail.com", // Change to recipient email
      subject: "New Contact Form Submission",
      text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true, message: "Email sent!" });
  } catch (error) {
    console.error("Email error:", error);
    return res.status(500).json({ success: false, message: "Email failed to send" });
  }
}

import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { firstName, lastName, email, message } = req.body;

  // Create a transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER, // Your email
      pass: process.env.EMAIL_PASS, // Your app password
    },
  });

  try {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "info@ranavtechnologies.com", // Replace with your recipient email
      subject: "New Contact Form Submission",
      text: `
        Name: ${firstName} ${lastName}
        Email: ${email}
        Message: ${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Failed to send email." });
  }
}

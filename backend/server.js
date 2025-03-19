require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.post("/send", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587, // 🔥 Render pe 587 better hai
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    // 📩 Email to the user (confirmation)
    const userMailOptions = {
      from: `"Sandip Singh Parmar" <noreply@yourdomain.com>`, // Custom sender
      to: email,
      subject: "Thank You for Contacting Me!",
      text: `Hello ${name},\n\nThank you for reaching out! I have received your message and will get back to you as soon as possible.\n\nYour Message:\n"${message}"\n\nBest regards,\nSandip Singh Parmar`,
    };

    // 📩 Email to yourself (for record keeping)
    const selfMailOptions = {
      from: process.env.EMAIL_USER,
      to: "sandipsinghparmar18@gmail.com",
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      text: `You received a new message from your portfolio website.\n\nName: ${name}\nEmail: ${email}\nMessage:\n"${message}"`,
    };

    // ✅ Send both emails
    await transporter.sendMail(selfMailOptions);
    console.log(`✅ Self email sent to: sandipsinghparmar18@gmail.com`);

    await transporter.sendMail(userMailOptions);
    console.log(`✅ User email sent to: ${email}`);

    res.status(200).json({ message: "Emails sent successfully" });
  } catch (error) {
    console.error("❌ Error sending emails:", error);
    res.status(500).json({ error: "Error sending email" });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});

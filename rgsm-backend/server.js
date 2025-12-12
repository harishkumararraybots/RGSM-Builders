import express from "express";
import axios from "axios";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ------------------------------
// EMAIL SENDER (ZOHO)
// ------------------------------
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// ------------------------------
// SEND WHATSAPP TEMPLATE MESSAGE
// ------------------------------
app.post("/api/send-whatsapp", async (req, res) => {
  try {
    const { name, phone, message, email, service } = req.body;

    // Combine email/service for field 3
    const emailService = email || service || "N/A";

    const payload = {
      messaging_product: "whatsapp",
      to: process.env.WA_BUSINESS_NUMBER,
      type: "template",
      template: {
        name: process.env.WA_TEMPLATE_NAME,
        language: { code: "en" },
        components: [
          {
            type: "body",
            parameters: [
              { type: "text", text: name },            // {{1}}
              { type: "text", text: phone },           // {{2}}
              { type: "text", text: emailService },    // {{3}}
              { type: "text", text: message }          // {{4}}
            ]
          }
        ]
      }
    };

    const url = `https://graph.facebook.com/v18.0/${process.env.WA_PHONE_NUMBER_ID}/messages`;

    const response = await axios.post(url, payload, {
      headers: {
        Authorization: `Bearer ${process.env.WA_ACCESS_TOKEN}`,
        "Content-Type": "application/json"
      }
    });

    res.json({
      success: true,
      message: "WhatsApp template message sent!",
      data: response.data
    });

  } catch (error) {
    console.error("❌ WHATSAPP ERROR:", error.response?.data);
    res.status(500).json({
      success: false,
      error: "WhatsApp sending failed",
      details: error.response?.data
    });
  }
});
// ------------------------------
// SEND EMAIL TO YOU (CONTACT FORM)
// ------------------------------
app.post("/api/send-email", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    await transporter.sendMail({
      from: `"RGSM Builders" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: "New Contact Inquiry - RGSM Builders",
      html: `
        <h2>New Contact Inquiry</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Message:</b><br>${message}</p>
      `
    });

    res.json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("❌ EMAIL ERROR:", error);
    res.status(500).json({ error: "Email sending failed", details: error });
  }
});

// ------------------------------
// START SERVER
// ------------------------------
app.listen(process.env.PORT, () => {
  console.log(`🚀 Backend running at http://localhost:${process.env.PORT}`);
});

import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import multer from "multer";

const app = express();
app.use(cors());

// File Upload Handling
const upload = multer({ storage: multer.memoryStorage() });

// POST ROUTE TO RECEIVE FORM DATA
app.post("/apply", upload.single("resume"), async (req, res) => {
    try {
        const { name, phone, address, role, email } = req.body;

        // ---------- NODEMAILER SETUP ----------
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "pandureddypatterns@gmail.com",        // YOUR GMAIL
                pass: "myei body ybln qflu",          // GOOGLE APP PASSWORD
            },
        });

        // ---------- 1️⃣ SEND EMAIL TO ADMIN ----------
        await transporter.sendMail({
            from: "Career Application <yourgmail@gmail.com>",
            to: "lokeshmaddibiona@gmail.com",
            subject: `New Application - ${role}`,
            html: `
        <h2>New Job Application Received</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Address:</b> ${address}</p>
        <p><b>Role Applied:</b> ${role}</p>
      `,
            attachments: [
                {
                    filename: req.file.originalname,
                    content: req.file.buffer,
                },
            ],
        });

        // ---------- 2️⃣ SEND EMAIL TO USER ----------
        await transporter.sendMail({
            from: "HR Team <yourgmail@gmail.com>",
            to: email,
            subject: "Application Received - JRKS Group",
            html: `
        <h2>Thank You For Applying!</h2>
        <p>Dear ${name},</p>
        <p>Your application for <b>${role}</b> has been received.</p>
        <p>Our HR team will contact you if your profile matches our requirements.</p>
        <br/>
        <p>Warm Regards,<br/>JRKS Group HR Team</p>
      `,
        });

        res.json({ success: true });
    } catch (error) {
        console.error(error);
        res.json({ success: false, error });
    }
});

app.listen(5000, () => console.log("Server running on port 5000"));

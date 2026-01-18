const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const path = require('path');
require('dotenv').config();

const app = express();

// 🔴 DEBUG MIDDLEWARE
app.use((req, res, next) => {
  console.log(`\n📍 ${req.method} ${req.path}`);
  console.log(`📍 Origin header: ${req.get('origin') || 'NEMA'}`);
  next();
});

/**
 * CORS config (LOCAL + kasnije Netlify)
 */
const allowedOrigins = [
  'http://localhost:3000',
  'http://127.0.0.1:3000',
];

const corsOptions = {
  origin: function (origin, callback) {
    console.log(`🔍 CORS check - Origin koji dolazi: "${origin}"`);

    if (!origin) {
      console.log('✅ CORS: Nema origin-a (ok - postman/curl)');
      return callback(null, true);
    }

    if (allowedOrigins.includes(origin)) {
      console.log(`✅ CORS: "${origin}" je dozvoljen`);
      return callback(null, true);
    }

    console.log(`❌ CORS: "${origin}" NIJE dozvoljen`);
    return callback(new Error('Not allowed by CORS: ' + origin));
  },
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
  credentials: true,
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions));

app.use(express.json());

// Nodemailer transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 587),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Test email konekcije
transporter.verify((error) => {
  if (error) {
    console.log('❌ SMTP Connection Error:', error);
  } else {
    console.log('✅ SMTP je spreman za slanje mailova');
  }
});

// API - Contact endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: 'Sva polja su obavezna' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: 'Nevažeća email adresa' });
    }

    await transporter.sendMail({
      from: `Malle Für Alle <${process.env.MAIL_FROM}>`,
      to: process.env.MAIL_TO,
      replyTo: email,
      subject: `Malle für Alle - Kontaktanfrage: ${subject}`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 20px; border-radius: 10px;">
          
          <!-- Header sa logom -->
          <div style="background: white; border-radius: 10px 10px 0 0; padding: 20px; text-align: center; border-bottom: 3px solid #d40e7b;">
            <img src="cid:logo" alt="Malle Für Alle" style="max-width: 150px; height: auto; margin-bottom: 10px;">
            <h1 style="color: #d40e7b; margin: 0; font-size: 24px;">Neue Kontaktanfrage</h1>
          </div>

          <!-- Main content -->
          <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px;">
            
            <!-- Absender -->
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 20px; border-radius: 8px; margin-bottom: 25px; color: white;">
              <p style="margin: 0; color: rgba(255,255,255,0.8); font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">👤 Absender</p>
              <h2 style="margin: 8px 0 0 0; font-size: 28px; font-weight: 700;">${name}</h2>
            </div>

            <!-- Email und Betreff vereint in Nachricht -->
            <div style="background: #f8f9ff; padding: 20px; border-radius: 8px; border-left: 5px solid #667eea; margin-bottom: 25px;">
              <div style="margin-bottom: 15px;">
                <p style="margin: 0; color: #667eea; font-size: 11px; text-transform: uppercase; letter-spacing: 2px; font-weight: 700;">📧 Von</p>
                <p style="margin: 5px 0 0 0; color: #333;"><a href="mailto:${email}" style="color: #d40e7b; text-decoration: none; font-weight: 600; font-size: 15px;">${email}</a></p>
              </div>
              <div style="border-top: 1px solid #e0e0e0; padding-top: 15px;">
                <p style="margin: 0; color: #667eea; font-size: 11px; text-transform: uppercase; letter-spacing: 2px; font-weight: 700;">📌 Betreff</p>
                <p style="margin: 5px 0 0 0; color: #333; font-size: 16px; font-weight: 600;">${subject}</p>
              </div>
            </div>

            <hr style="border: none; border-top: 2px solid #eee; margin: 25px 0;">

            <!-- Nachricht - Full width, grocer -->
            <div>
              <p style="margin: 0 0 12px 0; color: #667eea; font-size: 12px; text-transform: uppercase; letter-spacing: 2px; font-weight: 700;">💬 Nachricht</p>
              <div style="background: linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%); padding: 25px; border-radius: 8px; line-height: 1.9; border-left: 5px solid #d40e7b;">
                <p style="margin: 0; color: #333; white-space: pre-wrap; font-size: 16px; font-weight: 500;">${message}</p>
              </div>
            </div>

            <hr style="border: none; border-top: 2px solid #eee; margin: 25px 0;">

            <!-- Footer -->
            <div style="text-align: center;">
              <p style="margin: 0; color: #999; font-size: 12px;">
                Diese Nachricht wurde über das Kontaktformular auf 
                <strong style="color: #d40e7b;">Malle für Alle</strong> gesendet.
              </p>
              <p style="margin: 8px 0 0 0; color: #bbb; font-size: 11px;">
                ⏰ ${new Date().toLocaleString('de-DE', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>

          </div>
        </div>
      `,
      text: `MALLE FÜR ALLE - Kontaktanfrage

Absender: ${name}
Von: ${email}
Betreff: ${subject}

Nachricht:
${message}

---
Diese Nachricht wurde über das Kontaktformular auf Malle für Alle gesendet.
Datum: ${new Date().toLocaleString('de-DE')}`,
      attachments: [
        {
          filename: 'logo.png',
          path: path.join(__dirname, 'public', 'logo.png'),
          cid: 'logo',
        },
      ],
    });

    console.log(`✅ Email poslat od: ${email}`);
    return res.status(200).json({ ok: true, message: 'Email je uspješno poslat' });
  } catch (error) {
    console.error('❌ Email error:', error);
    return res.status(500).json({ message: 'Greška pri slanju emaila' });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ ok: true, message: 'Server je aktivan' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`\n✅ Backend je pokrenut na http://localhost:${PORT}`);
  console.log(`📧 Mailovi se šalju na: ${process.env.MAIL_TO}\n`);
});

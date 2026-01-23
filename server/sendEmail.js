const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch'); // verzija 2
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.post('/send-email', async (req, res) => {
  const { to, subject, html } = req.body;

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`
      },
      body: JSON.stringify({
        from: 'onboarding@resend.dev', // možeš zamijeniti svojim emailom
        to,
        subject,
        html
      })
    });

    if (!response.ok) throw new Error('Greška pri slanju emaila');

    const data = await response.json();
    res.status(200).json({ success: true, id: data.id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: err.message });
  }
});

app.listen(5000, () => console.log('Server running on port 5000'));

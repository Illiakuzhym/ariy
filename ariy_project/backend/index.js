require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());
app.use(express.json());


app.post('/api/send-to-telegram', async (req, res) => {
  const { name, phone, service, datetime, comment } = req.body;
  const text =
    `<b>Нова заявка з сайту</b>\n` +
    `<b>Ім'я:</b> ${name}\n` +
    `<b>Телефон:</b> ${phone}\n` +
    `<b>Послуга:</b> ${service}\n` +
    (datetime ? `<b>Час:</b> ${datetime}\n` : "") +
    (comment ? `<b>Коментар:</b> ${comment}\n` : "");
  try {
    await axios.post(
      `https://api.telegram.org/bot${process.env.TG_BOT_TOKEN}/sendMessage`,
      {
        chat_id: process.env.TG_CHAT_ID,
        text,
        parse_mode: "HTML"
      }
    );
    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ ok: false, error: err.message });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log('Telegram backend started on', PORT));

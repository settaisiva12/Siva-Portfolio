import express from 'express';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'sivaganesh15093@gmail.com',
      pass: 'yolv ufum nqun keqh'
    }
  });

  const mailOptions = { 
    from: email,
    to: 'sivaganesh15093@gmail.com',
    subject: 'New Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.status(500).json({ error: true, message: 'Failed to send email' });
    } else {
      res.json({ error: false, message: 'Email sent successfully' });
    }
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
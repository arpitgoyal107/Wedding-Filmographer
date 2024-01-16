import express from 'express';
import { createTransport } from 'nodemailer';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());    // Use CORS middleware

app.post('/send-email', (req, res) => {
  const { name, email, tel, message } = req.body;

  const transporter = createTransport({
    service: 'Gmail',
    auth: {
      user: 'arpitgoyal126116@gmail.com',
      pass: 'yghd sxvt jwbf crpo'
    }
  });

  const mailOptions = {
    from: 'arpitgoyal126116@gmail.com',
    to: 'goelarpit03@gmail.com',
    subject: `New Form Enquiry by ${name}`,
    text: `
      Name: ${name}
      Email: ${email}
      Phone: ${tel}
      Message: ${message}
    `
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error:', error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent:', info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

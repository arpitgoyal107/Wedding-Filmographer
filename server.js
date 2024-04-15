import express from 'express';
import { createTransport } from 'nodemailer';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.post('/send-email', async (req, res) => {
  const { name, email, tel, message } = req.body;

  try {
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

    await transporter.sendMail(mailOptions);
    console.log('Email sent');
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error('Error:', error.name, error.message);
    res.status(500).send('Error sending email');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

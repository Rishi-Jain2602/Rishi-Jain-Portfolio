const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/send-email', async (req, res) => {
    const { name, email, message } = req.body;

    let transporter = nodemailer.createTransport({
        host: 'smtp-relay.brevo.com',
        port: 587,
        secure: false,
        auth: {
            user: '836###1001@smtp-brevo.com',
            pass: '###############'
        }
    });

    const mailOptions = {
        from: email,
        to: '#####', 
        subject: `Message from ${name} via Portfolio website`,
        text: message,
    };

    try {
        let info = await transporter.sendMail(mailOptions);
        console.log('Message sent: %s', info.messageId);
        res.status(200).send('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send('Error sending email: ' + error.message);
    }
});

app.listen(PORT, () => console.log('Server running on port '+PORT));

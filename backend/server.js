const express = require('express');
const axios =  require('axios')
const cors = require('cors');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000
require('dotenv').config();

const nylasGrantId = process.env.NylasGrantId
const nylasApiKey = process.env.NylasApiKey
const Email_ID = process.env.email

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/send-email', async (req, res) => {
    const { name, email, message } = req.body;

    const emailData = {
        subject: `Message from ${name} via Portfolio website`,
        body: `Name:${name} <br> Email Id: ${email} <br> Message: ${message}`,
        to: [
            {
                name: 'Rishi Jain',
                email: Email_ID 
            }
        ],
        content_type: 'text/html'
    };

    try {
        // Use Axios to send the POST request to Nylas API
        const response = await axios.post(
            `https://api.us.nylas.com/v3/grants/${nylasGrantId}/messages/send`,
            emailData,
            {
                headers: {
                    Authorization: `Bearer ${nylasApiKey}`,
                    'Content-Type': 'application/json'
                }
            }
        );

        res.status(200).send('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error.response ? error.response.data : error.message);
        res.status(500).send('Error sending email: ' + error.message);
    }
});

app.listen(PORT, () => console.log('Server running on port '+PORT));

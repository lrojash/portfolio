import { datadogRum } from '@datadog/browser-rum';
import { datadogLogs } from '@datadog/browser-logs';

// Datadog tracing to APM
const tracer = require('dd-trace').init({
    logInjection: true
});
require('dotenv').config();

// Adding logs

datadogLogs.init({
     clientToken: process.env.TOKEN,
     site: 'datadoghq.com',
     forwardErrorsToLogs: true,
     sampleRate: 100
 });
// Adding Broswer
datadogRum.init({
    applicationId: '57a2ee76-6934-442d-9fae-aa40d743e7aa',
    clientToken: 'pubec59d654b295b7a7670be20ea9688e8f',
    site: 'datadoghq.com',
    service:'-https://lrojasportfolio.herokuapp.com/',
    // Specify a version number to identify the deployed version of your application in Datadog 
    version: '1.0.0',
    sampleRate: 100,
    trackInteractions: true
});



const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const cors = require('cors');

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.post('/send', (req, res, next) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD, 
        }
    })

    const mailOptions = {
        from: req.body.email,
        to: process.env.EMAIL,
        subject: `Message from ${req.body.email}: ${req.body.subject}`,
        text: req.body.message,
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if(error) {
            res.send('failed')
        } else {
            console.log('Email sent: ' + info.response);
            res.send('Success');
        }
    } )
})


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
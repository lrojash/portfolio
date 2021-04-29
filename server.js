const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

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
require('dotenv').config();
const express = require("express");
const nodemailer = require('nodemailer');
const app = express();
const cors = require("cors")
const port = 3000;

app.use(express.json());
app.use(cors())
app.use(express.urlencoded({ extended: true })); // or false
app.use((req,res, next) =>{
    res.setHeader("Access-Control-Allow-Origin","*");
    next();
});

function sendEmail(email, subject, message, name) {
  return new Promise((resolve, reject) => {
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      }
    });
    const mail_configs = {
      from: `${name} ${process.env.EMAIL_USER}`,
      to: email,
      subject: subject,
      html: `<h1>Hello this is ${name}</h1>\n\n<p>${message}</p>`,
    };
    transporter.sendMail(mail_configs, function (error, info) {
        if (error) {
          console.log('Error sending email:', error);
          return reject(error);
        }
        console.log('Email sent:', info.response);
        return resolve({ message: "Email sent successfully" });
      });
      
  });
}
app.get('/', (req,res) =>{
    sendEmail().then((response) => res.send(response.message)).catch((error) => res.status(500).send(error.message))
})

app.post('/send-email', (req, res) => {
    const { email, subject, message, name } = req.body;
    sendEmail(email, subject, message, name)
      .then((response) => res.send(response.message))
      .catch((error) => res.status(500).send(error.message));
  });
  
  
app.listen(port, () => {
  console.log(`Nodemailer is listening at http://localhost:${port}`);
});

var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Contact Us' });
});

router.post('/', function(req, res, next) {
  let transporter = nodemailer.createTransport({
    host: 'aspmx.l.google.com',
    port: 25,
    secure: false
  });
  
  let mailOptions = {
    from: '"'+req.body.name+'" <sales@ceramictileservices.net>', // sender address
    to: 'brandon@ceramictileservices.net', // list of receivers
    subject: req.body.subject, // Subject line
    text: req.body.message, // plain text body
    html: req.body.message, // html body
    replyTo: req.body.email
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.send(error);
    }
    res.render('success');
  });
});

module.exports = router;

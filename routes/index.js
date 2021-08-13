var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  },
  {
    text: "Bonjour Mademoiselle",
    user: "Francois",
    added: new Date()
  },
  {
    text: "Guten tag",
    user: "Fluga",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Mini Messageboard", messages: messages });
});

// Handle form data received
router.post('/new', function(req, res, next) {
  const msg = req.body.message;
  const new_user = req.body.messenger;
  messages.push({ text: msg, user: new_user, added: new Date() });
  res.redirect('/');
});

module.exports = router;

var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')

var urlencodedParser = bodyParser.urlencoded({ extended: false })

const messages = [];

/* GET home page. */
// const messages = [
//    {
//      text: "Hi there!",
//      user: "Amando",
//      added: new Date()
//    },
//    {
//      text: "Hi Julio!",
//      user: "Julio",
//      added: new Date()
//    },
//    {
//      text: "Hi El!",
//      user: "Elsie",
//      added: new Date()
//    },
//    {
//      text: "Hi Melchy!",
//      user: "Melchy",
//      added: new Date()
//    },
//    {
//      text: "Hello World!",
//      user: "Charles",
//      added: new Date()
//    }
// ];

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Message Board', messages: messages });
});

router.get('/new', function(req, res, next) {
  res.render('form', { title: 'Add Message' });
});

router.post('/new',urlencodedParser, function(req, res, next) {
  // res.render('form', { title: 'Add Message', authorName: req.body.author_name, text: req.body.text_message });
  messages.push({text: req.body.text_message, user: req.body.author_name, added: req.body.added_date});
  console.log(messages);
  res.redirect('/');
});




module.exports = router;

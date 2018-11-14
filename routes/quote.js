var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('quote', { title: 'Get a Quote' });
});

module.exports = router;

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('other', { title: 'Other Services' });
});

module.exports = router;

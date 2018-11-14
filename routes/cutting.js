var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('cutting', { title: 'Custom Cutting' });
});

module.exports = router;

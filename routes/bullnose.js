var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('bullnose', { title: 'Bullnose' });
});

module.exports = router;

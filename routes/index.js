var express = require('express');
var router = express.Router();

/* GET Login. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Residential and Commercial Property Evaluation System' });
});

module.exports = router;

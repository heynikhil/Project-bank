var express = require('express');
var router = express.Router();

/* GET Register. */
router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Residential and Commercial Property Evaluation System' });
});
 /* GET Login*/ 
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Residential and Commercial Property Evaluation System' });
});

module.exports = router;

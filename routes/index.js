var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("hello");
});

router.get('/createrestaurant', function(req, res, next) {
  res.render('createrestaurant', null);
});
module.exports = router;

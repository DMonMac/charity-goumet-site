var express = require('express');
var router = express.Router();
var RestaurantController = require('../controllers/RestaurantController');

router.get('/:resource', function(req, res, next) {
  var resource = req.params.resource

  if (resource == 'restaurant') {
    RestaurantController.find(req.query, function(err, restaurants) {
      if (err) {
        res.json({
          confirmation: 'fail',
          message: err
        })
        return
      }
      res.json({
        confirmation: 'success',
        results: restaurants
      })
    })
  }
});





module.exports = router

var Restaurant = require('../models/Restaurant')

module.exports = {
  find: function(params, callback) {
    Restaurant.find(params, function(err, restaurants) {
      if (err) {
        callback(err, nll)
        return
      }
      callback(null, restaurants)
    })
  },

  findById: function(id, callback) {
    Restaurant.findById(id, function(err, restaurant) {
      if (err) {
        callback(err, null)
        return
      }
      callback(null,zone)
    })
  },

  create: function(params, callback) {
    Restaurant.create(params, function(err, restaurant) {
      if(err) {
        callback(err, null)
        return
      }
      callback(null, restaurant)
    })
  },

  update: function() {
  },
}

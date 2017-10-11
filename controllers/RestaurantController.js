var Restaurant = require('../models/Restaurant')

module.export = {
  find: function(params, callback) {
    Restaurant.find.(params, function(err, restaurants) {
      if (err) {
        callback(err, nll)
        return
      }

    })
  },

  findById: function() {

  },

  update: function() {

  },

  create: function() {

  },
}

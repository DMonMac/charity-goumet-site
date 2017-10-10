var mongoose = require('mongoose');

var restaurantSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
  picture: String,
  seat_amt: Number,
  description: String,
});

var restaurant = module.exports = mongoose.model('Restaurant', restaurantSchema);

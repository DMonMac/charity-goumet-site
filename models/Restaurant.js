var mongoose = require('mongoose');

var RestaurantSchema = new mongoose.Schema({
  name: { type: String, default:'' },
  email: { type: String },
  password: { type: String },
  picture: { type: String },
  seat_amt: { type: Number },
  description: { type: String, default:'' },
  location: { type: [Number] }
});

var Restaurant = module.exports = mongoose.model('RestaurantSchema', RestaurantSchema);

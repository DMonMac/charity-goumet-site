var mongoose = require('mongoose');

var ReservationSchema = new mongoose.Schema({
  start_date: { type: Date, default: Date.now },
  end_date: { type: Date },
  seat_amount: { type: Number },
  complete: { type: Boolean },
  customer_id: { type: String },
  restaurant_id: { type: String }

});

var Reservation = module.exports = mongoose.model('ReservationSchema', ReservationSchema)

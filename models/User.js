var mongoose = require('mongoose');

var UserSchema = new mongoose Schema({
  name: { type: String, default:'' },
  location: { type:[Number] },
  timestamp: { type:Date, default:Date.now },
});

var User = module.exports = mongoose.model('UserSchema', UserSchema)

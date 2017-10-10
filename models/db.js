var mongoose = require ('mongoose');

var db = mongoose.connect('mongodb://localhost/charity-gourmet', {
  useMongoClient: true,
})

module.exports = db

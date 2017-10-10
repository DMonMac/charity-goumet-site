var mongoose = require ('mongoose');

var db = mongoose.connect('mongodb://localhost/charity-gourmet', {
  useMongoClient: true,
}).then(function() {
  console.log('mongodb connected')
});

module.exports = db

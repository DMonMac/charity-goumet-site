var mongoose = require ('mongoose');

var db = mongoose.connect('mongodb://localhost/charity-gourmet', function(err, res) {
  if (err) {
    console.log('DB CONNECTION FAILED ' +err)
  } else {
    console.log('DB CONNECTION SUCCESS: ')
  }
})

module.exports = db

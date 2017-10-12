var mongoose = require ('mongoose');

var db = mongoose.connect('mongodb://charity:charity@charity-gourmet-shard-00-00-em7de.mongodb.net:27017,charity-gourmet-shard-00-01-em7de.mongodb.net:27017,charity-gourmet-shard-00-02-em7de.mongodb.net:27017/test?ssl=true&replicaSet=charity-gourmet-shard-0&authSource=admin', function(err, res) {
  if (err) {
    console.log('DB CONNECTION FAILED ' +err)
  } else {
    console.log('DB CONNECTION SUCCESS: ')
  }
})

module.exports = db

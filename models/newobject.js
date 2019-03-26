const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var newObjectSchema = new Schema({
  Exchange: {
    type: String
  },
  Base: String,
  Quote: String,
  TimeStart: Date,
  Values: Array
});


module.exports = mongoose.model('newObj', newObjectSchema);






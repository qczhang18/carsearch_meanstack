var carSchema = new mongoose.Schema({
var mongoose = require('mongoose');

var Schema = mongoose.Schema;
    zipcode: Number,
    make: String,
    model: String,
    miles: Number,
    image: String,
    contact: String

});


var Cars = mongoose.model('Cars', carSchema);

module.exports = Cars;

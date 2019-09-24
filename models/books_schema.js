var mongoose = require('mongoose');
var Schema = mongoose.Schema();

var BookSchema = new Schema({
    title : String,
    Author: String,
    Category : String
})

module.exports = mongoose.model('Book', BookSchema);
var mongoose = require('mongoose');

var schemaVariableName = mongoose.Schema({
    name:String,
    price:Number
    
})

module.exports = mongoose.model("price",schemaVariableName) 
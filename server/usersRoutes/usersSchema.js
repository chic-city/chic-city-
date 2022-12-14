var mongoose = require('mongoose');
const db = require('../db/index.js');
mongoose.Promise = global.Promise;

var usersSchema = mongoose.Schema({
    FirstName:String,
    LastName:String,
    email:String,
    pwd:String,
    
});
 

module.exports = mongoose.model("users",usersSchema);
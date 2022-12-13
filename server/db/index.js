var mongoose = require('mongoose');

var mongoUri = 'mongodb://0.0.0.0/';


// TODO: Connect Mongoose to our local MongoDB via URI specified above and export it below
var db=mongoose.connect(mongoUri,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(res=>{console.log('db connected');})
  .catch(err=>console.log(err))

module.exports = db;

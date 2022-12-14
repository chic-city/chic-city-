var mongoose = require('mongoose');

var mongoUri = 'mongodb://0.0.0.0/';



var db=mongoose.connect(mongoUri,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(res=>{console.log('db connected');})
  .catch(err=>console.log(err))

module.exports = db;

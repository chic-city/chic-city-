var mongoose = require('mongoose');

var mongoUri = 'mongodb+srv://suits:suits@cluster0.b1h6cft.mongodb.net/test';



var db=mongoose.connect(mongoUri,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(res=>{console.log('db connected');})
  .catch(err=>console.log(err))

module.exports = db;

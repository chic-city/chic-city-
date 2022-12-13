var express = require('express');
var morgan = require('morgan');
var db = require('./db');
var cors=require("cors")



var app = express();
app.use(cors())
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../client/dist'));
app.use('/prod',productRouter)


/


app.get('/', function (req, res) {
  res.json({ message: 'Welcome to the Poke-MongoDB RESTful API!' });
});

var PORT = 4000;

app.listen(PORT, function () {
  console.log('Prod-MongoDB RESTful API listening on http://localhost:' + PORT);
});

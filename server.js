var fs = require('fs');
var path = require('path');
var express = require('express');
var handlebars = require('express-handlebars');
var mongoClient = require('mongodb').MongoClient;
var bodyParser = require('body-parser')
var app = express();
var port = process.env.PORT || 3000;

var mongoURL = 'mongodb://cs290_miurary:cs290_miurary@classmongo.engr.oregonstate.edu:27017/cs290_miurary';
var mongoConnection = null;

app.engine('handlebars', handlebars({
  defaultLayout: 'main',
}));

app.set('view engine', 'handlebars');

app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.status(200).render('login');
  console.log("== Server status", res.statusCode);
});

app.use(express.static('public'));

app.get('*', function (req, res) {
  res.status(404).render('404');
  console.log("== Server status", res.statusCode);
});

MongoClient.connect (mongoURL, function (err, connection) {

  if (err)
    throw err;
  mongoConnection = connection;
  app.listen(port, function () {
    console.log("== Server listening on port:", port);
});
});

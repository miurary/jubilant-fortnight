var fs = require('fs');
var path = require('path');
var express = require('express');
var handlebars = require('express-handlebars');
var MongoClient = require('mongodb').MongoClient;
var bodyParser = require('body-parser')
var app = express();
var port = process.env.PORT || 4000;
var array = require('./sportData');

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

app.get('/home', function(req, res) {
  res.status(200).render('homepage', {sports: array});
  console.log("== Server status from home", res.statusCode);
});

app.get('/newPost', function(req, res) {
  res.status(200).render('post_event');
  console.log("== Server status from new post", res.statusCode);
});

app.get('/sport/:sportId', function(req, res) {
  var id = req.params.sportId;
  res.status(200).render('sports_page', {name: id});
  console.log("== Server status from sport page", res.statusCode);
});

app.use(express.static('public'));

app.get('*', function (req, res) {
  res.status(404).render('404');
  console.log("== Server status", res.statusCode);
});

app.post('/newUser', function (req, res) {

if (req.body && req.body.user && req.body.pass && req.body.email) {
  var collection = mongoConnection.collection('users');
  collection.insertOne({
    user: req.body.user,
    pass: req.body.pass,
    email: req.body.email
  })
  res.status(200).send("Successfully added user");
  console.log("== User Added");
}
else {
  res.status(400).send("User signup failed");
}
});

app.post('/verifyLogIn', function (req, res) {

  if (req.body && req.body.user && req.body.pass) {
    var collection = mongoConnection.collection('users');
    var query = {user: req.body.user};
    collection.find(query).toArray(function(err, result) {
      if (err) throw (err);
      if (result && result[0].pass && result[0].pass == req.body.pass) {
        res.status(200).send("Passwords verified");
        console.log("== Passwords match");
      }
      else {
        res.status(300).send("Passwords don't match");
        console.log("== Passwords don't match");
      }
    });
  }
});

MongoClient.connect (mongoURL, function (err, connection) {

  if (err)
    throw err;
  mongoConnection = connection;
  app.listen(port, function () {
    console.log("== Server listening on port:", port);
});
});

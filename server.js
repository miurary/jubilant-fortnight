var fs = require('fs');
var path = require('path');
var express = require('express');
var handlebars = require('express-handlebars');
var MongoClient = require('mongodb').MongoClient;
var bodyParser = require('body-parser')
var app = express();
var port = process.env.PORT || 3001;
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
  console.log("== Server status from /", res.statusCode);
});

app.get('/home', function(req, res) {
  res.status(200).render('homepage', {sports: array});
  console.log("== Server status from home", res.statusCode);
});

app.get('/passChange', function(req, res) {
  res.status(200).render('passwordChange');
  console.log("== Server status from pass:", res.statusCode);
});

app.get('/newPost', function(req, res) {
  res.status(200).render('post_event');
  console.log("== Server status from new post", res.statusCode);
});

/*app.get('/', function (req, res) {
  var collection = mongoConnection.collection('final');
  var videos = collection.find({}).toArray(function (err, videos) {
    if (err) {
      res.status(500).send("Error fetching");
    }
    else {
      res.status(200).render('index', {
        video: videos
      });
      console.log("== Server status", res.statusCode);
    }
  })

}); */

app.get('/sport/:sportId', function(req, res) {
  app.engine('handlebars', handlebars({
    defaultLayout: 'sportsMain',
  }));
  var idVar = req.params.sportId;
  var end = "-collection";
  var full = idVar.concat(end);
  console.log(full);
  var collection = mongoConnection.collection(full);
  var posts = collection.find({}).toArray(function (err, posts) {
    if (err) {
      res.status(500).send("Error fetching");
    }
    else {
      res.status(200).render('sports_page', {name: idVar, post: posts});
      console.log("== Server status from sport page", res.statusCode, "id:", idVar);
    }
  });
});

app.use(express.static('public'));
//app.use(express.static(path.join(__dirname, '/public')));

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

app.post('/addPost', function(req, res) {
  if (req.body && req.body.title && req.body.day && req.body.month && req.body.year && req.body.seriousness && req.body.collection) {
    console.log("Broken:", req.body.collection);
    var collection = mongoConnection.collection(req.body.collection);
    collection.insertOne({
      title: req.body.title,
      day: req.body.day,
      month: req.body.month,
      year: req.body.year,
      seriousness: req.body.seriousness
    })
    res.status(200).send("Successfully added post");
    console.log("==post added");
  }
  else {
    res.status(400).send("Error adding post");
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

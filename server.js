var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var router = require('./routes/index.js');

var app = express();

// set EJS as our view engine. This allows us to make dynamic pages.
app.set('view engine', 'ejs');

// serve static files from public folder
app.use(express.static(__dirname + '/public'));

// serve static files from song folder
app.get('/song', function (req, res) {
  res.sendFile('./public/song/song.html' , { root : __dirname});
});

// serve static files from choreo folder
app.get('/choreo', function (req, res) {
  res.sendFile('./public/choreo/choreographers.html' , { root : __dirname});
});

// serve static files from team folder
app.get('/team', function (req, res) {
  res.sendFile('./public/team/team.html' , { root : __dirname});
});





























// listen on port 3000
app.listen(process.env.PORT || 3000);
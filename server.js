var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
// var router = require('./routes/index.js');

var app = express();





// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: true });

// set EJS as our view engine. This allows us to make dynamic pages.
app.set('view engine', 'ejs');




// serve static files from public folder
app.use(express.static(__dirname + '/views'));



// serve static files from song folder
app.get('/song', function (req, res) {
  res.sendFile('./views/song/song.html' , { root : __dirname});
});

// app.POST for song page:
// urlencodedParser will pass the info from /song after we click submit
app.post('/song', urlencodedParser, function (req, res) {
	console.log(req.body);
	//now we'll have access to req.body data in song-success
  	res.render('./song/song-success.ejs' , {data: req.body});
});




// serve static files from choreo folder
app.get('/choreo', function (req, res) {
  res.sendFile('./views/choreo/choreographers.html' , { root : __dirname});
});

// app.POST for choreo page:
// urlencodedParser will pass the info from /choreo after we click submit
app.post('/choreo', urlencodedParser, function (req, res) {
	console.log(req.body);
  	// res.sendFile('./views/song/song.html' , { root : __dirname});
});



// serve static files from team folder
app.get('/team', function (req, res) {
  res.sendFile('./views/team/team.html' , { root : __dirname});
});

// app.POST for team page:
// urlencodedParser will pass the info from /team after we click submit
app.post('/team', urlencodedParser, function (req, res) {
	console.log(req.body);
  	// res.sendFile('./views/song/song.html' , { root : __dirname});
});



























// listen on port 3000
app.listen(process.env.PORT || 3000);
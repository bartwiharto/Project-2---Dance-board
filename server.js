var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();


// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: true });

// set EJS as our view engine. This allows us to make dynamic pages.
app.set('view engine', 'ejs');




// serve static files from public folder
app.use(express.static(__dirname + '/views'));


//=========================//
//controller for /song
//=========================//

var data = [];

// serve static files from song folder
app.get('/song', function (req, res) {
  res.render('./song/song.ejs', {projectSongs: data});
});

// app.POST for song page:
// urlencodedParser will pass the info from /song after we click submit
app.post('/song', urlencodedParser, function (req, res) {
	console.log(req.body);
	data.push(req.body);
	//now we'll have access to req.body data in song-success(this was only for testing)
	//IMPORTANT: in the tutorial, it said to use res.json(data), but that takes the page to JSON page.
	//res.redirect('/song') will redirect the page to '/song' again (basically like a refresh) instead of JSON page
  	res.redirect('/song');
}); 

app.delete('/song', urlencodedParser, function (req, res) {
	console.log(req.body);
  	res.redirect('/song');
});


//=========================//
//controller for /choreo
//=========================//

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



//=========================//
//controller for /team
//=========================//


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
	console.log("You're listening to port 3000");
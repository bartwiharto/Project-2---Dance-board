var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();

var db = mongoose.connect("mongodb://localhost/projecttwo");


// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: true });

// set EJS as our view engine. This allows us to make dynamic pages.
app.set('view engine', 'ejs');




// serve static files from public folder
app.use(express.static(__dirname + '/views'));

//=========================//
//controller for /directory
//=========================//

// serve static files from song folder
app.get('/directory', function (req, res) {
  	res.render('./directory/directory.ejs' , { root : __dirname});
});


//=========================//
//controller for /song
//=========================//


var songSchema = new mongoose.Schema({
		artistName: String,
		songName: String,
		songYear: String,
		songYoutube: String
});

var Song = mongoose.model('Song', songSchema);

var dataSong = [];

// serve static files from song folder
app.get('/song', function (req, res) {
	res.render('./song/song.ejs', {projectSongs: dataSong});
});

// app.POST for song page:
// urlencodedParser will pass the info from /song after we click submit
app.post('/song', urlencodedParser, function (req, res) {
	console.log(req.body);
	dataSong.push(req.body);
	//now we'll have access to req.body data in song-success(this was only for testing)
	//IMPORTANT: in the tutorial, it said to use res.json(data), but that takes the page to JSON page.
	//res.redirect('/song') will redirect the page to '/song' again (basically like a refresh) instead of JSON page
  	res.redirect('/song');

var songOne = Song({
		artistName: req.body.artistName,
		songName: req.body.songName,
		songYear: req.body.songYear,
		songYoutube: req.body.songYoutube
}).save(function(err) {
	if (err) throw err;
	console.log('Song Saved');
});

}); 

//--DELETE FEATURE DOES NOT WORK--//

// app.delete('/song', urlencodedParser, function (req, res) {
// 	data = data.filter(function(song) {
// 	return song.item.replace(/ /g, '-') !== req.params.item;
// 	res.json('/song');
// 	});
// });


//=========================//
//controller for /choreo
//=========================//

var choreoSchema = new mongoose.Schema({
		choreoName: String,
		choreoSongName: String,
		choreoYear: String,
		choreoYoutube: String
});

var Choreo = mongoose.model('Choreo', choreoSchema);

var dataChoreo = [];

// serve static files from choreo folder
app.get('/choreo', function (req, res) {
  res.render('./choreo/choreographers.ejs', {projectChoreo: dataChoreo});
});

// app.POST for choreo page:
// urlencodedParser will pass the info from /choreo after we click submit
app.post('/choreo', urlencodedParser, function (req, res) {
	console.log(req.body);
	dataChoreo.push(req.body);
	res.redirect('/choreo');

var choreoOne = Choreo({
		choreoName: req.body.choreoName,
		choreoSongName: req.body.choreoSongName,
		choreoYear: req.body.choreoYear,
		choreoYoutube: req.body.choreoYoutube
}).save(function(err) {
	if (err) throw err;
	console.log('Choreographer Saved');
});

});

// //--DELETE FEATURE DOES NOT WORK--//



//=========================//
//controller for /team
//=========================//

var teamSchema = new mongoose.Schema({
		teamName: String,
		competition: String,
		teamYear: String,
		teamYoutube: String
});

var Team = mongoose.model('Team', teamSchema);

var dataTeam = [];

// serve static files from team folder
app.get('/team', function (req, res) {
  res.render('./team/team.ejs' , {projectTeam: dataTeam});
});

// app.POST for team page:
// urlencodedParser will pass the info from /team after we click submit
app.post('/team', urlencodedParser, function (req, res) {
	console.log(req.body);
	dataTeam.push(req.body);
	res.redirect('/team');

	var teamOne = Team({
		teamName: req.body.teamName,
		competition: req.body.competition,
		teamYear: req.body.teamYear,
		teamYoutube: req.body.teamYoutube
	}).save(function(err) {
		if (err) throw err;
		console.log('Choreographer Saved');
	});

});


//--DELETE FEATURE DOES NOT WORK--//




// listen on port 3000
app.listen(process.env.PORT || 3000);
	console.log("You're listening to port 3000");
















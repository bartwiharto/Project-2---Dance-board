var express = require('express');
var router = express.Router();

//GET '/song'

router.get('/song', function(req, res, next) {

	return res.render('song', {title: 'Song'});
});

//GET '/choreo'
router.get('/choreo', function(req, res, next) {

	return res.render('choreo', {title: 'Choreographers'});
});

//GET '/team'
router.get('/team', function(req, res, next) {

	return res.render('team', {title: 'Teams'});
});

module.exports = router;
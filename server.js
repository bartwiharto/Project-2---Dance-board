var express = require('express');
var bodyParser = require('body-parser');


var app = express();


// set EJS as our view engine. This allows us to make dynamic pages.
app.set('view engine', 'ejs');

// serve static files from public folder
app.use(express.static(__dirname + '/public'));




























// listen on port 3000
app.listen(process.env.PORT || 3000);
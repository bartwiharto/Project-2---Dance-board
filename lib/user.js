var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var userSchema = new Schema({
	userName: {type:String, unique: true},
	password: String
});

var User = mongoose.model('myUser', userSchema);

module.exports = User;
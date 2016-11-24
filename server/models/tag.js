var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var TagSchema   = new Schema({
	name: String,
	itag: []// arr
}, {collection : "requests"});

module.exports = mongoose.model('Tag', TagSchema);
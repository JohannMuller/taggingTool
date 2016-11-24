var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var nameSchema   = new Schema({
	name: String
}, {collection : "tags"});

module.exports = mongoose.model('TagName', nameSchema);
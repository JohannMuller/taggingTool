var Tag = require('../models/tag');
var TagName = require('../models/name');

module.exports.list = function (req, res) {
  Tag.find({}, function (err, results) {
	console.log("RESULTS ARE: ",results);
	var arr = [];
	for(var i = 0; i<results.length;i++){
		if(results[i].itag[0]){
			arr.push({
			_id : results[i]._id,
			name : results[i].name,
			itag : results[i].itag
			});
			console.log("enter if: ",  results[i]);
		}//end of if statement
		else{
			console.log("enter if: ",  results[i].itag);
			console.log("enters else statement ",  arr);
			
		}//end of else statement 
	}//end of for loop 
	console.log("results ",arr);
	res.json(arr);
  });
}

module.exports.update = function(req, res){
	var arr = [];
	//for(var k = 0;k<req.body.intentTag.length();k++){
	//	arr[k]= req.body.intentTag[k];
	//}
	console.log("Server side entered ", req.body.itag);
	Tag.findByIdAndUpdate(req.params.id, {
		$set: {
			name: req.body.name,
			itag: req.body.itag //arr
			}
		},	function (err, tag){
			if(err) res.send(err);
			res.json(tag);
	});
}

module.exports.listUntags = function (req, res) {
  Tag.find({}, function (err, results) {
	
	var arr = [];
	for(var i = 0; i<results.length;i++){
		if(results[i].itag[0]){
			//console.log("enter if: ",  results[i].intentTag);
		}//end of if statement
		else{
			//console.log("enter if: ",  results[i].intentTag);
			//console.log("enters else statement ",  arr);
			arr.push({
			_id : results[i]._id,
			name : results[i].name
			});
		}//end of else statement 
	}//end of for loop 
	//console.log("results ",arr);
	res.json(arr);
  });
}

module.exports.updateUntags = function(req, res){
	var arr = [];
	//for(var k = 0;k<req.body.intentTag.length();k++){
	//	arr[k]= req.body.intentTag[k];
	//}
	console.log("Server side entered ", req.body.itag);
	Tag.findByIdAndUpdate(req.params.id, {
		$set: {
			name: req.body.name,
			itag: req.body.itag //arr
			}
		},	function (err, tag){
			if(err) res.send(err);
			res.json(tag);
	});
}

module.exports.listName = function(req, res){
	TagName.find({}, function(err, results){
		console.log("RESULTS: ", results);
		res.json(results);
		
	});
}


/*
module.exports.create = function (req, res) {
  var tag = new Tag(req.body);
  tag.save(function (err, result) {
    res.json(result);
  });
}

module.exports.updateTagName = function(req, res){
	console.log("Server side entered ", req.body);
	var ntag = new TagName(req.body);
	ntag.save(function(err, result){
		res.json(result);
	});
}
*/
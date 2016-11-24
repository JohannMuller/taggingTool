var express           = require('express'),
    app               = express(),
    bodyParser        = require('body-parser'),
    mongoose          = require('mongoose'),
    tagsController = require('./server/controllers/tagscontroller');

mongoose.connect('mongodb://localhost:27017/STDBank');

app.use(bodyParser());

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/client/views/index.html');
});

app.use('/js', express.static(__dirname + '/client/js'));

//	app.get('/api', function (req, res) {
//	  res.sendfile(__dirname + '/client/views/index.html');
//	});

//REST API
app.get('/api/tags', tagsController.list);
app.post('/api/tags/:id', tagsController.update);
app.get('/api/untags', tagsController.listUntags);
app.post('/api/untags/:id', tagsController.updateUntags);
app.get('/api/tagnames', tagsController.listName);

app.listen(3000, function() {
  console.log('I\'m Listening...');
})
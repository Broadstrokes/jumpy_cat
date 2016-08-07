var express = require('express');
var app = express();
var bodyParser = require('body-parser');

//Middleware
app.use(bodyParser());
app.use(express.static('public'));

app.get('/', function(req, res) {
  console.log('Serving request for ' + req.url);
  res.render('index');
});

app.post('/api/meetups', function(req, res) {
  console.log(req.body);
  res.json();
});

app.listen(3000, function() { console.log('Listening on 3000')});
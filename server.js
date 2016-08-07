var express = require('express');
var app = express();

app.get('/', function(req, res) {
  console.log('Serving request for ' + req.url);
  // res.render('index');
});

app.post('/api/meetups', function(req, res) {
  console.log(req.body);
});

app.listen(3000, function() { console.log('Listening on 3000')});
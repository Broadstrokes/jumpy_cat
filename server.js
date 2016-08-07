var express = require('express');
var app = express();
var bodyParser = require('body-parser');



//Middleware
app.use(express.static('public'));
app.use(bodyParser.json());


//Routes
app.get('/', function(req, res) {
  console.log('Serving request for ' + req.url);
  res.render('index');
}); 




//
app.listen(process.env.port || 3000, function() {
  console.log('Jumpy_cat server listening on port 3000');
});

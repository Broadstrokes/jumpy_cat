var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');


//Connect to MongoDB
mongoose.connect('mongodb://localhost/mikemoser-mean', function() {
  console.log('Connected to DB');
});

//Meetup model
// var mongoose = require('mongoose');

  //Create Schema
  var meetupSchema = mongoose.Schema({
    name: {
      type: String, 
      required: true
    }
  });

  //Compiling schema into Model
  var Meetup = mongoose.model('Meetup', meetupSchema);

//Meetup controller
var MeetupCtrl = {};
MeetupCtrl.list = function (req, res) {
  Meetup.find({}, function (err, results) {
    res.json(results);
  });
}

MeetupCtrl.create = function (req, res) {
  var meetup = new Meetup(req.body);
  meetup.save(function(err, result) {
    if(err) {console.log('Could not save to db');}
    else {
      console.log('Saved ', req.body, ' to db!'); 
      res.json(result);
    }
  });
}

MeetupCtrl.delete = function (req, res) {
  console.log('Hitting delete');
  Meetup.remove({ _id:req.params.id }, function (err, results) {
    if(err) {console.log('Something went wrong');}
    else {
      console.log('Deleted ', ' from db!'); 
      res.json({message: 'Successfully Deleted'});
    }
  });
}

//Middleware
app.use(bodyParser());
app.use(express.static('public'));

app.get('/', function(req, res) { res.render('index'); });
app.get('/api/meetups', MeetupCtrl.list);
app.post('/api/meetups', MeetupCtrl.create);
app.delete('/api/meetups/:id', MeetupCtrl.delete);

app.listen(3000, function() { console.log('Listening on 3000')});
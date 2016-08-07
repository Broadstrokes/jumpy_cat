app.controller('meetupsCtrl', function($scope, $http, $resource) { //init controller
  var Meetup = $resource('/api/meetups');

  $scope.meetups = [];
  $scope.refresh = function (arguments) {
    Meetup.query(function(results) {
      $scope.meetups = results;
    });    
  }

  $scope.refresh();
  $scope.createMeetup = function() {
    // $scope.meetups.push({name: $scope.meetupName});
    // $scope.meetupName = "";

    var meetup = new Meetup();
    meetup.name = $scope.meetupName;
    console.log(meetup.name);
    $scope.meetupName = "";
    meetup.$save(function (result) {
      $scope.meetups.push(result);
    });
  };

  $scope.deleteMeetup = function(meetup) {
    console.log('Hello I am here. meetup is: ', meetup._id);
    var Meetup = $resource('/api/meetups/' + meetup._id);
    Meetup.remove(function (result) {
      console.log(result.message);   
      $scope.refresh();
    });
  }


});
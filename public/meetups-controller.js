app.controller('meetupsCtrl', function($scope, $http, $resource) { //init controller

  var Meetup = $resource('/api/meetups');

  $scope.meetups = [
    {name: 'Bikers SF'},
    {name: 'Football SF'}
  ];

  $scope.meetupsCount = $scope.meetups.length;
  $scope.createMeetup = function() {
    // $scope.meetups.push({name: $scope.meetupName});
    // $scope.meetupName = "";

    var meetup = new Meetup();
    meetup.name = $scope.meetupName;
    meetup.$save();
  };

});
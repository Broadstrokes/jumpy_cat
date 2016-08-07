app.controller('meetupsCtrl', function($scope, $http) { //init controller
  $scope.meetups = [
    {name: 'Bikers SF'},
    {name: 'Football SF'}
  ];

  $scope.meetupsCount = $scope.meetups.length;
  $scope.createMeetup = function() {
    $scope.meetups.push({name: $scope.meetupName});
    $scope.meetupName = "";
  };

})
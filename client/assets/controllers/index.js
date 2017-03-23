app.controller('IndexController',['$scope','$routeParams','UserFactory',function($scope,$routeParams,UserFactory){

  $scope.adduser = function(user){
    UserFactory.newUser(user);
  }

}])

app.controller('SingleController',['$scope','$routeParams','UserFactory',function($scope,$routeParams,UserFactory){
  $scope.theuser = "";
  function getsingle(id){
    UserFactory.getsingle(id,function(data){
      $scope.singleuser = data;
      $scope.theuser = data[0].owner.name;
      // console.log("OWNER",$scope.singleuser);
    })
  }
  getsingle($routeParams.id);
  function getsinglet(id){
    UserFactory.getsinglet(id,function(data){
      $scope.singleusert = data;
      // console.log("TAGGED",$scope.singleusert);
    })
  }
  getsinglet($routeParams.id);
  function getsuser(id){
    UserFactory.getsuser(id,function(data){
      $scope.currentUser = data;
      console.log(data);
    })
  }
  getsuser($routeParams.id);

}]);

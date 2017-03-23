app.controller('DashboardController',['$scope','$routeParams','UserFactory',function($scope,$routeParams,UserFactory){

  function getuser(){
    UserFactory.getuser(function(data){
      $scope.user = data;
    })
  }
  getuser();
  function getusers(){
    UserFactory.getusers(function(data){
      $scope.allusers = data;
      // console.log($scope.allusers);
    })
  }
  getusers();
  $scope.addlist = function(bucket){
    UserFactory.addbucket(bucket);
    getbuckets();
  }
  function getbuckets(){
    UserFactory.getbuckets(function(data){
      $scope.allbuckets = data;
    })
  }
  getbuckets();
  $scope.changestatus = function(bucketID){
    UserFactory.changeStatus(bucketID);
    getbuckets();
  }
  function getTagged(){
    UserFactory.gettagged(function(data){
      $scope.alltagged = data;
    })
  }
  getTagged();

}])

app.factory("UserFactory",['$location','$http',function($location,$http){

  var factory= {};

  factory.newUser = function(user){
    $http({
      url: "/newuser",
      method: "POST",
      data: user
    }).then(function(res){
      $location.url('/dashboard');
    },function(res){
      console.log(res);
    })
  }
  factory.getuser = function(callback){
    $http({
      url: "/dashboard",
      metho: "GET",
    }).then(function(res){
      callback(res.data);
    })
  }
  factory.getusers = function(callback){
    $http({
      url:'/getallusers',
      method: 'GET'
    }).then(function(res){
      callback(res.data);
    })
  }
  factory.addbucket = function(bucket){
    $http({
      url: "/addbucket",
      method: "POST",
      data: bucket
    }).then(function(res){
      $location.url('/dashboard');
    },function(res){
      console.log(res);
    })
  }
  factory.getbuckets = function(callback){
    $http({
      url:'/getallbuckets',
      method: 'GET'
    }).then(function(res){
      callback(res.data);
    })
  }
  factory.changeStatus = function(bucketID){
    $http({
      url: '/bucket/' + bucketID,
      method : 'POST',
    }).then(function(res){
      $location.url('/dashboard');
    },function(res){
      console.log(res);
    })
  }
  factory.gettagged = function(callback){
    $http({
      url:'/gettagged',
      method: 'GET'
    }).then(function(res){
      callback(res.data);
    })
  }
  factory.getsingle = function(id,callback){
    $http({
      url: '/user/' + id,
      method: 'GET'
    }).then(function(res){
      callback(res.data);
    },function(res){
      cosole.log(res);
    })
  }
  factory.getsinglet = function(id,callback){
    $http({
      url: '/usert/' + id,
      method: 'GET'
    }).then(function(res){
      callback(res.data);
      $location.url('/user/' + id);
    },function(res){
      cosole.log(res);
    })
  }
  factory.getsuser = function(id,callback){
    $http({
      url: "/getsuser/"+ id,
      metho: "GET",
    }).then(function(res){
      callback(res.data);
    })
  }

  return factory;
}])

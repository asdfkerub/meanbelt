var app = angular.module("app",['ngRoute','ngMessages']);
app.config(function($routeProvider){
  $routeProvider
    .when("/",{
      templateUrl : "partials/index.html",
      controller : "IndexController"
    })
    .when("/dashboard",{
      templateUrl : "partials/dashboard.html",
      controller : "DashboardController"
    })
    .when("/user/:id",{
      templateUrl : "partials/single.html",
      controller : "SingleController"
    })

})

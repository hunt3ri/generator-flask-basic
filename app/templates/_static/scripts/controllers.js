'use strict';
angular.module('myApp.controllers', [])
.controller('HelloWorldController', ['$scope', function ($scope)
{
    $scope.greeting = {name: 'World'};
}])
.controller('NavController', ['$scope', function ($scope)
{
     $scope.navbarCollapsed = true;
}]);

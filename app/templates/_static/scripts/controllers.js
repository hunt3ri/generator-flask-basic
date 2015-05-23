'use strict';
angular.module('myApp.controllers', [])
.controller('HelloWorldController', ['$scope', function ($scope)
{
    $scope.greeting = {name: 'World'};
}]);

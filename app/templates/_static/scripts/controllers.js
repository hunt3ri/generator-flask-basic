'use strict';
angular.module('myApp.controllers', []).controller('helloWorldCtrl', function ($scope)
{
    $scope.greeting = {name: 'World'};
});

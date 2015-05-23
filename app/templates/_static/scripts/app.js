'use strict';
var app = angular.module('myApp', ['myApp.controllers', 'myApp.directives']);

app.config(['$interpolateProvider', function($interpolateProvider) {
    $interpolateProvider.startSymbol('{[');
    $interpolateProvider.endSymbol(']}');
}]);


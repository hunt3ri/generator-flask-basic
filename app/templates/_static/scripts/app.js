'use strict';
var app = angular.module('myApp', ['myApp.controllers']);

app.config(['$interpolateProvider', function($interpolateProvider) {
    $interpolateProvider.startSymbol('{[');
    $interpolateProvider.endSymbol(']}');
}]);


'use strict';
angular.module('myApp.directives', [])
.directive('helloWorld', function () {
    return {
        restrict: 'AE',
        scope: { greeting: "=name" },
        template: "<h1>Hello {{ greeting.name }}</h1>" +
                  "<input data-ng-model='greeting.name' id='name'></input>"
        }
    });
'use strict';
describe('controller specs', function() {
    var $scope;

    beforeEach(module('myApp.controllers'));

    beforeEach(inject(function($rootScope, $controller) {
        $scope = $rootScope.$new();
        $controller('HelloWorldController', {$scope: $scope});
    }));

    it('should create "greeting" model name "World"', function() {
        expect($scope.greeting.name).toBe("World");
    });
});


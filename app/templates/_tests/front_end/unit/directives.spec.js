'use strict';
describe('specs for directives', function() {
    var $compile, $rootScope;

    beforeEach(module('myApp.directives'));

    beforeEach(inject(function(_$compile_, _$rootScope_ ) {
        $compile = _$compile_;
        $rootScope = _$rootScope_;

        $rootScope.greeting = {name: 'World'};

    }));

    it('should contain the provided name', function() {
        var element = $compile('<hello-world name="greeting">></hello-world>')($rootScope);
        $rootScope.$digest();
        expect(element.html()).toContain('World');
    });
});

describe('hello world app', function() {
    
    it('should have a title', function() {
        browser.get('http://localhost:5000');
        expect(browser.getTitle()).toEqual('Hello World');

    });

    it('should default to Hello World', function() {

        var h1 = element.all(by.css('h1')).first();

        expect(h1.getText()).toEqual('Hello World');
    });

    it ('should update model after input', function() {
        var h1 = element.all(by.css('h1')).first();
        var inputField = element.all(by.id('name'));

        inputField.clear().sendKeys('Iain');

        expect(h1.getText()).toEqual('Hello Iain');

    });
});
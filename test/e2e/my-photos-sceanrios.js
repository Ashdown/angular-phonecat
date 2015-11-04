describe('My Photos Application', function(){
    it('should show the page header', function(){
        browser.get('app/my-photos.html');
        expect(element(by.css('h1')).getText()).toContain('Rory');
    });
});
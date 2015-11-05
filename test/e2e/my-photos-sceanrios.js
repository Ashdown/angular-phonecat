describe('My Photos Application', function(){

    beforeEach(function(){
        browser.get('app/my-photos.html');
    })

    it('should show the page header', function(){
        expect(element(by.css('h1')).getText()).toContain('My Photos');
    });

    it('should display the device list page', function(){
        expect(element(by.css('h2').getText().toContain('All Devices')));
    })

    it('should display a list of devices', function(){
        expect(element(by.css('.device-item').count().toEqual(3)))
    });

    describe('when I click a device', function(){
        it('should display the device page', function(){
            expect(element(by.css('h2').getText().toContain('Device 0001')));
        })
    })
});
const MainPage = require('../pageobjects/main.page');

describe('Main page', () => {
    beforeAll('Open browser', () => {
        MainPage.open();
    });
    describe('Checking navbar links', () => {
        it('falcon 9 link should navigates to correct page', async () => {
            await MainPage.checkHeader(1);
            const browserUrl = await browser.getUrl();
            expect(browserUrl).toBe('https://www.spacex.com/vehicles/falcon-9/');
        });
        it('falcon 9 link should navigates to correct page', async () => {
            await browser.back();
            await browser.pause(1000);
            await MainPage.checkHeader(2);
            const browserUrl = await browser.getUrl();
            expect(browserUrl).toBe('https://www.spacex.com/vehicles/falcon-heavy/');
        });    
    });
});



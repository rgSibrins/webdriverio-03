const MainPage = require('../pageobjects/main.page');

describe('Main page', () => {
    beforeAll('Open browser', () => {
        MainPage.open();
    });
    describe('Checking header links', () => {
        it('falcon 9 link should navigates to correct page', async () => {
            await MainPage.checkHeader(1);
            const browserUrl = await browser.getUrl();
            expect(browserUrl).toBe('https://www.spacex.com/vehicles/falcon-9/');
        });
        it('falcon heavy link should navigates to correct page', async () => {
            await browser.back();
            await browser.pause(1000);
            await MainPage.checkHeader(2);
            const browserUrl = await browser.getUrl();
            expect(browserUrl).toBe('https://www.spacex.com/vehicles/falcon-heavy/');
        });
        it('dragon link should navigates to correct page', async () => {
            await browser.back();
            await browser.pause(1000);
            await MainPage.checkHeader(3);
            const browserUrl = await browser.getUrl();
            expect(browserUrl).toBe('https://www.spacex.com/vehicles/dragon/');
        });
        it('starship link should navigates to correct page', async () => {
            await browser.back();
            await browser.pause(1000);
            await MainPage.checkHeader(4);
            const browserUrl = await browser.getUrl();
            expect(browserUrl).toBe('https://www.spacex.com/vehicles/starship/');
        });
        it('human spaceflight link should navigates to correct page', async () => {
            await browser.back();
            await browser.pause(1000);
            await MainPage.checkHeader(5);
            const browserUrl = await browser.getUrl();
            expect(browserUrl).toBe('https://www.spacex.com/human-spaceflight/');
        });
        it('rideshare link should navigates to correct page', async () => {
            await browser.back();
            await browser.pause(1000);
            await MainPage.checkHeader(6);
            const browserUrl = await browser.getUrl();
            expect(browserUrl).toBe('https://www.spacex.com/rideshare/');
        });
        it('spacex logo should navigates to correct page', async () => {
            await (await MainPage.spacexLogo).click();
            await browser.pause(1000);
            const browserUrl = await browser.getUrl();
            expect(browserUrl).toBe('https://www.spacex.com/');
        });
        it('shop link should navigates to correct page', async () => {
            await (await MainPage.shopLink).click();
            await browser.switchWindow('https://shop.spacex.com/');
            const browserUrl = await browser.getUrl();
            expect(browserUrl).toBe('https://shop.spacex.com/');
        });        
    });
    describe('Checking hamburger menu', () => {
        it('mission link navigates to correct page', async () =>{
            await browser.switchWindow('https://www.spacex.com/');
            await (await MainPage.hamburgerMenu).click();
            await MainPage.hamburgerItems(7);
            await browser.pause(2000);
            const browserUrl = await browser.getUrl();
            expect(browserUrl).toBe('https://www.spacex.com/mission/')
        });
        it('launches link navigates to correct page', async () =>{
            await (await MainPage.hamburgerMenu).click();
            await MainPage.hamburgerItems(8);
            await browser.pause(2000);
            const browserUrl = await browser.getUrl();
            expect(browserUrl).toBe('https://www.spacex.com/launches/')
        });
        it('careers link navigates to correct page', async () =>{
            await (await MainPage.hamburgerMenu).click();
            await MainPage.hamburgerItems(9);
            await browser.pause(2000);
            const browserUrl = await browser.getUrl();
            expect(browserUrl).toBe('https://www.spacex.com/careers/')
        });
        it('updates link navigates to correct page', async () =>{
            await (await MainPage.hamburgerMenu).click();
            await MainPage.hamburgerItems(10);
            await browser.pause(2000);
            const browserUrl = await browser.getUrl();
            expect(browserUrl).toBe('https://www.spacex.com/updates/')
        });
        it('shop link navigates to correct page', async () =>{
            await (await MainPage.hamburgerMenu).click();
            await MainPage.hamburgerItems(11);
            await browser.switchWindow('https://shop.spacex.com/');
            const browserUrl = await browser.getUrl();
            expect(browserUrl).toBe('https://shop.spacex.com/')
        });
    });
});



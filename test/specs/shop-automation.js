const ShopPage = require('../pageobjects/shop.page');

describe('Shop page', () => {
    beforeAll('Open browser', () => {
        ShopPage.open();
    });
    describe('Checking products', () =>{
        it('click on product should navigates to product page', async () => {
            await (await ShopPage.tshirt).click();
            await browser.pause(1000);
            const browserUrl = await browser.getUrl();
            expect(browserUrl).toBe('https://shop.spacex.com/collections/mens/products/mens-crew-1-mission-patch-t-shirt');
        });
        it('product title is the right one', async () => {
            await browser.pause(1000);
            expect(await (await ShopPage.shirtTitle).getText()).toBe("MEN'S CREW-1 MISSION T-SHIRT");
        });
        it('add to cart btn should navigates to cart page', async () => {
            await browser.pause(1000);
            await (await ShopPage.addBtn).click();
            const browserUrl = await browser.getUrl();
            expect(browserUrl).toBe('https://shop.spacex.com/cart');
        });
    });
});
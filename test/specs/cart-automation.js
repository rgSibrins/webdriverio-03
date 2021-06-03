const ShopPage = require('../pageobjects/shop.page');
const CartPage = require('../pageobjects/cart.page');

describe('Cart page', () => {
    beforeAll('Open browser', () => {
        ShopPage.open();
        ShopPage.tshirt.click();
        ShopPage.addBtn.click();
        browser.maximizeWindow();
    });
    describe('Checking cart page btns', () =>{
        it('click on + should change the product amount', async () => {
            await (await CartPage.plusBtn).click();
            await browser.pause(1000);
            const quantity = await (await CartPage.quantityValue).getValue();
            expect(quantity).toBe('2');
        });
        it('click on - should change the product amount', async () => {
            await (await CartPage.minusBtn).click();
            await browser.pause(1000);
            const quantity = await (await CartPage.quantityValue).getValue();
            expect(quantity).toBe('1');
        });
        it('checkout btn should navigates to correct page', async () => {
            await browser.pause(3000);
            await (await CartPage.checkoutBtn).click();
            await browser.pause(2000);
            const browserDirection = await (await browser).getUrl(); 
            expect(browserDirection).not.toBe('https://shop.spacex.com/cart');
        });
    });
});
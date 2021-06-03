class CartPage {
    get plusBtn () { return $('//*[@id="shopify-section-cart-template"]/section/div/div/form/div/div[2]/div[3]/div/div/a[2]')}
    get minusBtn () { return $('//*[@id="shopify-section-cart-template"]/section/div/div/form/div/div[2]/div[3]/div/div/a[1]')}
    get quantityValue () { return $('.QuantitySelector > input')}
    get checkoutBtn () { return $('.Cart__Recap > button')}
}
module.exports = new CartPage();


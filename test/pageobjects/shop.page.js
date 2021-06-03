class ShopPage {
    get mensLink () { return $('.HorizontalList__item > a')}
    get tshirt () { return $('.ProductItem')}
    get shirtTitle () { return $('.ProductMeta__Title')}
    get addBtn () { return $('.ProductForm__AddToCart')}

    open () {
        return browser.url('https://shop.spacex.com/collections/mens');
    }
}
module.exports = new ShopPage();
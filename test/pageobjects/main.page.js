
class MainPage {
    get spacexLogo () { return $('#logo') }
    get shopLink () { return $('#navigation-right > ul > li > a') }
    get hamburgerMenu () {return $('#hamburger')}
    
    async checkHeader (value) {
        //value from 1 to 6
        await (await $('#navigation > ul > li:nth-child('+`${value}`+') > a')).click();
    }
    async hamburgerItems (value) {
        //value from 7 to 11
        await (await $('#menu-navigation > ul > li:nth-child('+`${value}`+') > a')).click();
    }
    open () {
        return browser.url('https://www.spacex.com/')
    }
}

module.exports = new MainPage();
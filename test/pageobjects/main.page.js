
class MainPage {
    
    get spacexLogo () { return $('#logo') }
    get shopLink () { return $('#navigation-right').$$('.nav-item a') }
    get hamburgerMenu () {return $('#hamburger')}
    get hamburgerItems () {return $('.nav-item secondary a')}
    get leftBtns () {return $('.inner-left-bottom').$$('.btn animate')}
    get footerCopy () { return $('#footer span')}
    get footerLinks () { return $('#footer').$$('a')}

    async checkHeader (value) {
        await (await $('#navigation > ul > li:nth-child('+`${value}`+') > a')).click();
    }

    open () {
        return browser.url('https://www.spacex.com/')
    }
}

module.exports = new MainPage();

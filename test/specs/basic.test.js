const expect = require('chai').expect
const itParam = require('mocha-param')


describe('webdriver.io page', () => {
    before("load website", function(){
        browser.url('https://webdriver.io')
    })
    it('should have the right title', () => {
        const title = browser.getTitle()
        expect(title).to.be.string('WebdriverIO · Next-gen WebDriver test framework for Node.js')
    })
})
const expect = require('chai').expect

describe('bb signup page', () => {
    it('should have the right title', () => {
        browser.url('https://www.buildbox.com/register/dev_SMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa/myFBSZNivV6HyCC1jJ1eQqvPnXc2xrmeNS60Zkz6X')
        expect($('.main-heading').getText()).to.be.string("Register to Start")
    })
})
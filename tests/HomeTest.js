module.exports = {
    'items-loaded' : function (browser) {
        browser
            .url("http://localhost:8081/home")
            .waitForElementVisible('body')
            .click('#Dirt')
            .click('button')
            .assert.elementPresent('#Dirt')
            .end()
    }
}
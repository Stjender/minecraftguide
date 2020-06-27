module.exports = {
    'normal-login' : function (browser) {
        browser
            .url("http://localhost:8081/")
            .waitForElementVisible('body')
            .setValue('input[id = username]', 'Henk')
            .setValue('input[id = password]', 'test123')
            .click('button')
            .assert.not.elementPresent('#error')
            .assert.urlContains('/Home')
            .end()
    },

    'wrong-login' : function (browser) {
        browser
            .url("http://localhost:8081/")
            .waitForElementVisible('body')
            .setValue('input[id = username]', 'Piet')
            .setValue('input[id = password]', '123test')
            .click('button')
            .assert.elementPresent('#error')
            .end()
    }
}
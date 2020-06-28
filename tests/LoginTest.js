module.exports = {
    'login' : function (browser) {
        browser
            .url("http://localhost:8081/Login")
            .waitForElementVisible('body')
            .assert.elementPresent('#logo')
            .assert.containsText("h1", "Inloggen")
            .assert.elementPresent('.field-text')
            .assert.elementPresent('.field-input')
            .assert.not.elementPresent('#error')
            .assert.elementPresent('.button-minecraft')
            .assert.elementPresent('.link')
            .end()
    },

    'right-login' : function (browser) {
        browser
            .url("http://localhost:8081/Login")
            .waitForElementVisible('body')
            .setValue('input[id = username]', 'Henk')
            .setValue('input[id = password]', 'test123')
            .click('.button-minecraft')
            .assert.not.elementPresent('#error')
            .assert.urlContains('/Items')
            .end()
    },

    'wrong-login' : function (browser) {
        browser
            .url("http://localhost:8081/Login")
            .waitForElementVisible('body')
            .setValue('input[id = username]', '')
            .setValue('input[id = password]', '')
            .click('button')
            .assert.elementPresent('#error')
            .assert.containsText('#error', "de username of password klopt niet")
            .end()
    },

    'login-register' : function (browser) {
        browser
            .url("http://localhost:8081/Login")
            .waitForElementVisible('body')
            .click('.link')
            .assert.urlContains('/Register')
            .end()
    }
}
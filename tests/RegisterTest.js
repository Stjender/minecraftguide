module.exports = {
    'register' : function (browser) {
        browser
            .url("http://localhost:8081/Register")
            .waitForElementVisible('body')
            .assert.elementPresent('#logo')
            .assert.containsText("h1", "Registreren")
            .assert.elementPresent('.field-text')
            .assert.elementPresent('.field-input')
            .assert.not.elementPresent('#error')
            .assert.elementPresent('.button-minecraft')
            .assert.elementPresent('.link')
            .end()
    },

    'normal-register' : function (browser) {
        browser
            .url("http://localhost:8081/Register")
            .waitForElementVisible('body')
            .setValue('input[id = username]', 'Jan')
            .setValue('input[id = password]', 'te123st')
            .setValue('input[id = email]', 'Jan@test.com')
            .click('.button-minecraft')
            .assert.not.elementPresent('#error')
            .assert.urlContains('/Home')
            .end()
    },

    'wrong-register' : function (browser) {
        browser
            .url("http://localhost:8081/Register")
            .waitForElementVisible('body')
            .setValue('input[id = username]', '')
            .setValue('input[id = password]', 'test')
            .setValue('input[id = email]', 'Jantest.com')
            .click('.button-minecraft')
            .assert.elementPresent('#error')
            .assert.containsText('#error', "De gebruikersnaam bestaat al of een veld is niet geldig")
            .end()
    },

    'register-login' : function (browser) {
        browser
            .url("http://localhost:8081/Register")
            .waitForElementVisible('body')
            .click('.link')
            .assert.urlContains('/Login')
            .end()
    }
}
module.exports = {
    'normal-register' : function (browser) {
        browser
            .url("http://localhost:8081/register")
            .waitForElementVisible('body')
            .setValue('input[id = username]', 'Jan')
            .setValue('input[id = password]', 'te123st')
            .setValue('input[id = email]', 'Jan@test.com')
            .click('button')
            .assert.not.elementPresent('#error')
            .assert.urlContains('/Home')
            .end()
    },

    'existing-register' : function (browser) {
        browser
            .url("http://localhost:8081/register")
            .waitForElementVisible('body')
            .setValue('input[id = username]', 'Jan')
            .setValue('input[id = password]', 'te123st')
            .setValue('input[id = email]', 'Jan@test.com')
            .click('button')
            .assert.elementPresent('#error')
            .end()
    },

    'wrong-register' : function (browser) {
        browser
            .url("http://localhost:8081/register")
            .waitForElementVisible('body')
            .setValue('input[id = username]', '')
            .setValue('input[id = password]', 'test')
            .setValue('input[id = email]', 'Jantest.com')
            .click('button')
            .assert.elementPresent('#error')
            .end()
    },
}
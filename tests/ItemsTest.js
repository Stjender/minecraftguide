module.exports = {
    'step one: login' : function (browser) {
        browser
            .url("http://localhost:8081/Login")
            .waitForElementVisible('body')
            .setValue('input[id = username]', 'Henk')
            .setValue('input[id = password]', 'test123')
            .click('.button-minecraft')
    },

    'step two: items-loaded' : function (browser) {
        browser
            .waitForElementVisible('body')
            .assert.urlContains('/Items')
            .assert.elementPresent('#logo')
            .assert.containsText("h1", "All Items")
            .assert.elementPresent('.button-minecraft')
            .assert.elementPresent('.Item')
            .assert.containsText('.Item', "aan je lijst!")
    },

    'step three: user items' : function (browser) {
        browser
            .click('.Item')
            .click('.button-minecraft')
            .waitForElementVisible('body')
            .assert.urlContains('/Items/Me')
            .assert.containsText("h1", "Your Items")
            .assert.elementPresent('.button-minecraft')
            .assert.elementPresent('.Item')
            .end()
    }
}
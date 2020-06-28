module.exports = {
    'homepage' : function (browser) {
        browser
            .url("http://localhost:8081/")
            .waitForElementVisible('body')
            .assert.elementPresent('#logo')
            .assert.containsText("h1", "The Ultimate Minecraft Guide")
            .assert.containsText("p", "Welkom bij de allerbeste minecraft guide die er bestaat. Als je ingelogd heb kan je items kiezen die vervolgens voor je opgeslagen worden. Deze kan je terug vinden op je persoonlijke pagina. Zo kan je snel de items zien waar je vaak informatie van opzoekt.")
            .assert.elementPresent('.button-minecraft')
            .assert.elementPresent('.link')
            .end()
    },

    'homepage-register' : function (browser) {
        browser
            .url("http://localhost:8081/")
            .waitForElementVisible('body')
            .click('.button-minecraft')
            .assert.urlContains('/Register')
            .end()
    },

    'homepage-login' : function (browser) {
        browser
            .url("http://localhost:8081/")
            .waitForElementVisible('body')
            .click('.link')
            .assert.urlContains('/Login')
            .end()
    },
}
module.exports = {
    'Demo test ecosia.org': function (browser) {
        var ecosia = browser.page.ecosia_page();
        ecosia
            .navigate()
            .waitForElementVisible('body')
            .assert.titleContains('Ecosia')
            .assert.visible('@searchTxtbox')
            .setValue('@searchTxtbox', 'nightwatch')
            .assert.visible('@submitBtn')
            .click('@submitBtn')
            .assert.containsText('@results', 'Nightwatch.js')
            .end();
    }
};
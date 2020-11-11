describe('Ecosia', function () {
    test('demo test', function (browser) {
        browser.page.ecosia_page()
            .navigate()
            .setValue('@searchTxtbox', 'nighwatch')
            .click('@submitBtn')
            .assert.containsText('@results', 'Nightwatch.js')
            .end();
    });
});
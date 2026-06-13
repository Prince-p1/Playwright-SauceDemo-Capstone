const { test } = require('@playwright/test');

test('Network Failure', async ({ page }) => {

    await page.route('**/*', route => route.abort());

    try {
        await page.goto('https://www.saucedemo.com/');
    } catch (error) {
        console.log('Network failure handled successfully');
    }
});
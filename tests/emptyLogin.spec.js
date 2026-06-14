const { test, expect } = require('@playwright/test');

test('Empty Login Validation', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');

  await page.click('#login-button');

  await expect(
    page.locator('[data-test="error"]')
  ).toContainText('Username is required');

});
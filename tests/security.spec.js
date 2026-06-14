const { test, expect } = require('@playwright/test');

test('Script Injection Input Test', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');

  await page.fill(
    '#user-name',
    '<script>alert(1)</script>'
  );

  await page.fill(
    '#password',
    'secret_sauce'
  );

  await page.click('#login-button');

  await expect(
    page.locator('[data-test="error"]')
  ).toBeVisible();

});
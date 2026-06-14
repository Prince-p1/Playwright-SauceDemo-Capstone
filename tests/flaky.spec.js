const { test, expect } = require('@playwright/test');

test.describe.configure({
  retries: 2
});

test('Known Flaky Example', async ({ page }) => {

  await page.goto(
    'https://www.saucedemo.com/'
  );

  await expect(
    page.locator('#login-button')
  ).toBeVisible();

});
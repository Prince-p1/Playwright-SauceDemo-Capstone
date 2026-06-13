const { test, expect } = require('@playwright/test');

test.use({
  viewport: {
    width: 375,
    height: 812
  }
});

test('Mobile View Test', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');

  await expect(
    page.locator('#login-button')
  ).toBeVisible();
});
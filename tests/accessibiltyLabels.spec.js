const { test, expect } = require('@playwright/test');

test('Accessibility Labels Validation', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');

  await expect(
    page.locator('#user-name')
  ).toBeVisible();

  await expect(
    page.locator('#password')
  ).toBeVisible();

  await expect(
    page.locator('#login-button')
  ).toBeVisible();

});
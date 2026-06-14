const { test, expect } = require('@playwright/test');

test('Performance Glitch User Login', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');

  await page.fill(
    '#user-name',
    'performance_glitch_user'
  );

  await page.fill(
    '#password',
    'secret_sauce'
  );

  await page.click('#login-button');

  await expect(page).toHaveURL(/inventory/);

  await expect(
    page.locator('.inventory_list')
  ).toBeVisible();

});
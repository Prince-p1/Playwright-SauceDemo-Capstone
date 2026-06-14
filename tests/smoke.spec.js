const { test, expect } = require('@playwright/test');

test('Visual Smoke Test', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');

  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');

  await page.click('#login-button');

  // Inventory Page
  await expect(
    page.locator('.inventory_list')
  ).toBeVisible();

  // Cart Page
  await page.click('.shopping_cart_link');

  await expect(
    page.locator('.cart_list')
  ).toBeVisible();

  // Checkout Page
  await page.click('#checkout');

  await expect(
    page.locator('.checkout_info')
  ).toBeVisible();

});
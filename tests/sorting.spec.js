const { test, expect } = require('@playwright/test');

test('Sort Products A-Z', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');

  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');

  await page.click('#login-button');

  await page.selectOption(
    '[data-test="product-sort-container"]',
    'az'
  );

  await expect(
    page.locator('.inventory_item_name').first()
  ).toContainText('Sauce Labs Backpack');
});
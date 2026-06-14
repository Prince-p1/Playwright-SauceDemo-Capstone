const { test, expect } = require('@playwright/test');

test('Verify Checkout Subtotal', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');

  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');

  await page.click('#login-button');

  await page.click(
    '[data-test="add-to-cart-sauce-labs-backpack"]'
  );

  await page.click('.shopping_cart_link');

  await page.click('#checkout');

  await page.fill('#first-name', 'Prince');
  await page.fill('#last-name', 'Kumar');
  await page.fill('#postal-code', '411033');

  await page.click('#continue');

  const itemPrice = await page
    .locator('.inventory_item_price')
    .textContent();

  const subtotal = await page
    .locator('.summary_subtotal_label')
    .textContent();

  const price = parseFloat(
    itemPrice.replace('$', '')
  );

  const subtotalValue = parseFloat(
    subtotal.replace('Item total: $', '')
  );

  expect(subtotalValue).toBe(price);

});
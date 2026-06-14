const { test, expect } = require('@playwright/test');

const { log } =
require('../utils/logger');

test('Custom Logger Demo', async ({ page }) => {

  log('Opening SauceDemo');

  await page.goto(
    'https://www.saucedemo.com/'
  );

  log('Entering credentials');

  await page.fill(
    '#user-name',
    'standard_user'
  );

  await page.fill(
    '#password',
    'secret_sauce'
  );

  await page.click('#login-button');

  log('Login Successful');

  await expect(page)
    .toHaveURL(/inventory/);

});
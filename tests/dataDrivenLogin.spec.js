
const { test, expect } = require('@playwright/test');
const users = require('../test-data/users.json');

users.forEach(user => {

  test(`Login Test - ${user.username}`, async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');

    await page.locator('#user-name').fill(user.username);
    await page.locator('#password').fill(user.password);

    await page.locator('#login-button').click();

    if (user.expected === 'success') {

      await expect(page).toHaveURL(/inventory/);

    } else {

      await expect(
        page.locator('[data-test="error"]')
      ).toBeVisible();
    }
  });
});
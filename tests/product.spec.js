const { test } = require('@playwright/test');

const LoginPage =
require('../src/pages/LoginPage');

const InventoryPage =
require('../src/pages/InventoryPage');

test('Product Validation',
async ({ page }) => {

    const login =
    new LoginPage(page);

    const inventory =
    new InventoryPage(page);

    await login.goto();

    await login.login(
        'standard_user',
        'secret_sauce'
    );

    await inventory.verifyProductsExist();
});
const { test } = require('@playwright/test');
const LoginPage = require('../src/pages/LoginPage');

test('Valid Login', async ({ page }) => {

    const login = new LoginPage(page);

    await login.goto();

    await login.login(
        'standard_user',
        'secret_sauce'
    );
});

test('Invalid Login', async ({ page }) => {

    const login = new LoginPage(page);

    await login.goto();

    await login.login(
        'wrong',
        'wrong'
    );

    await login.verifyError(
      'Username and password do not match'
    );
});

test('Locked User', async ({ page }) => {

    const login = new LoginPage(page);

    await login.goto();

    await login.login(
        'locked_out_user',
        'secret_sauce'
    );

    await login.verifyError(
      'Sorry, this user has been locked out.'
    );
});
const { test, expect } = require('@playwright/test');

test('API Mock Example', async ({ page }) => {

  await page.route('**/inventory.html', async route => {

    await route.fulfill({
      status: 200,
      contentType: 'text/html',
      body: `
        <html>
          <body>
            <h1>Mocked Inventory Page</h1>
          </body>
        </html>
      `
    });

  });

  await page.goto(
    'https://www.saucedemo.com/inventory.html'
  );

  await expect(
    page.locator('h1')
  ).toHaveText('Mocked Inventory Page');

});
const { test, expect } =
require('@playwright/test');

test('Images Have Alt',
async ({ page }) => {

    await page.goto(
    'https://www.saucedemo.com/'
    );

    const images =
    page.locator('img');

    const count =
    await images.count();

    for(let i=0;i<count;i++){

        const alt =
        await images.nth(i)
        .getAttribute('alt');

        expect(alt).not.toBeNull();
    }
});
const { expect } = require('@playwright/test');

class InventoryPage {

    constructor(page) {

        this.page = page;

        this.products = '.inventory_item';

        this.cartBadge = '.shopping_cart_badge';

        this.firstProduct =
        '.inventory_item:first-child button';

    }

    async verifyProductsExist() {

        const count =
        await this.page.locator(this.products).count();

        expect(count).toBeGreaterThan(0);
    }

    async addFirstProduct() {
        await this.page.click(this.firstProduct);
    }

    async verifyCartCount(count) {
        await expect(
        this.page.locator(this.cartBadge))
        .toHaveText(count.toString());
    }
}

module.exports = InventoryPage;
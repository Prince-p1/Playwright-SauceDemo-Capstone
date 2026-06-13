const { expect } = require('@playwright/test');

class CartPage {

    constructor(page) {

        this.page = page;

        this.cartIcon = '.shopping_cart_link';

        this.checkoutBtn = '#checkout';
    }

    async openCart() {
        await this.page.click(this.cartIcon);
    }

    async checkout() {
        await this.page.click(this.checkoutBtn);
    }
}

module.exports = CartPage;
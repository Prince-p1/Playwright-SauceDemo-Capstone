class CheckoutPage {

    constructor(page) {

        this.page = page;

        this.firstName = '#first-name';
        this.lastName = '#last-name';
        this.zip = '#postal-code';

        this.continueBtn = '#continue';

        this.finishBtn = '#finish';

        this.completeHeader =
        '.complete-header';
    }

    async fillDetails(fname,lname,zip) {

        await this.page.fill(this.firstName,fname);
        await this.page.fill(this.lastName,lname);
        await this.page.fill(this.zip,zip);

        await this.page.click(this.continueBtn);
    }

    async finishOrder() {
        await this.page.click(this.finishBtn);
    }
}

module.exports = CheckoutPage;
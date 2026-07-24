const { expect } = require('@playwright/test');
module.exports = class CartDetailsPage {
    constructor(page) {
        this.page = page;
        this.selectCountry = page.locator("[placeholder*='Country']")
        this.dropdown = page.locator(".ta-results")
        this.creditCardNumber =  page.locator("[value='4542 9931 9292 2293']");
        this.expiryMonth = page.locator("[class*='ddl']");
        this.expiryDay = page.locator("[class*='ddl']")
        this.cvv = page.locator('div.field.small  input.input.txt')
        this.nameOnCard = page.locator("div.field input.input.txt")
        this.applyCoupon = page.locator("[name='coupon']");
        this.loginEmail = page.locator(".user__name.mt-5 [type='text']");
        this.placeOrderButton = page.locator(".action__submit");

    }
    async placeOrder() {
        await this.selectCountry.pressSequentially("ind", { delay: 150 });
        await this.dropdown.first().waitFor();
        const CountryCount = await this.dropdown.locator("button").count();
        for (let i = 0; i < CountryCount; i++) {
            const CountryName = await this.dropdown.locator("button").nth(i).textContent();
            if (CountryName === " India") {
                await this.dropdown.locator("button").nth(i).click();
                break
            }
        }
        await this.creditCardNumber.fill("1234567890143");
        await this.expiryMonth.first().selectOption("07")
        await this.expiryDay.last().selectOption("19")
        await this.cvv.nth(0).fill("123");
        await this.nameOnCard.nth(2).fill("Durga Prasad");
        await this.applyCoupon.fill("LoveYouDP<3");
        await expect(this.loginEmail.first()).toHaveText("durgaprasad9977@gmail.com");
        await this.placeOrderButton.click();
    }

}
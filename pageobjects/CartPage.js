const { expect } = require('@playwright/test');
module.exports = class CartPage{
constructor(page)
{
    this.page=page;
    this.cartList = page.locator("div li");
    this.cartProduct = page.locator("h3:has-text('ZARA COAT 3')");
    this.checkOut = page.locator("text=Checkout");
}

async checkOutCart()
{
await this.cartList.first().waitFor();
const bool = this.cartProduct.isVisible();
expect(bool).toBeTruthy();
await this.checkOut.click();
}


}
module.exports = class DashboardPage {

    constructor(page) {
        this.page = page;
        this.products = page.locator(".card-body");
        this.productsText = page.locator('.card-body b');
        this.cart = page.locator("[routerlink*='cart']");

    }

    async searchProductAddCart(ProductName) {
        const titles = await this.productsText.allTextContents();
        console.log(this.titles);
        const count = await this.products.count();
        for (let i = 0; i < count; i++) {
            if (await this.products.nth(i).locator("b").textContent() === ProductName) {

                await this.products.nth(i).locator("text= Add To Cart").click();
                break;
            }

        }

    }
    async navigateToCart() {
        await this.cart.click();
    }


}
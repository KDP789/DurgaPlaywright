const LoginPage = require("../pageobjects/LoginPage")
const DashboardPage = require("../pageobjects/DashboardPage");
const CartPage = require('../pageobjects/CartPage');
const CartDetailsPage = require('../pageobjects/CartDetailsPage');
module.exports = class POManager{
constructor(page)
{
    this.page = page;
    this.loginpage = new LoginPage(this.page);
    this.dashboardPage = new DashboardPage(this.page);
    this.cartPage = new CartPage(this.page)
    this.cartDetailsPage = new CartDetailsPage(this.page)
}

getLoginPage()
{
    return this.loginpage;
}

getDashboardPage()
{
    return this.dashboardPage;
}

getCartPage()
{
    return this.cartPage
}

getCartDetailsPage()
{
    return this.cartDetailsPage
}

}
const {test,expect}=require('@playwright/test');
const POManager = require("../pageobjects/POManager")
const testdata = JSON.parse(JSON.stringify(require("../utils/DurgaTestPOTestData.json")))

for (const data of testdata)
{
test (`CLient App Login of ${data.ProductName}`,async({page})=>
{
    const poManager = new POManager(page)

const loginpage = poManager.getLoginPage();
await loginpage.goTo();
await loginpage.validLogin(data.username,data.password);
const dashboardPage = poManager.getDashboardPage();
await dashboardPage.searchProductAddCart(data.ProductName);
await dashboardPage.navigateToCart();
const cartPage = poManager.getCartPage();
await cartPage.checkOutCart();
const cartDetailsPage = poManager.getCartDetailsPage();
await cartDetailsPage.placeOrder();



await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
const OrderID= await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
console.log(OrderID);

await page.locator("button[routerlink='/dashboard/myorders']").click();
await page.locator("tbody").waitFor();
const rows = page.locator("tbody tr");

for(let i=0; i<await rows.count(); i++)
{
    const rowOrderID= rows.nth(i).locator("th").textContent();
    if(OrderID.includes(rowOrderID))
    {
        await rows.nth(i).locator("button").first().click();
        break
    }
}

const orderIDOrderDeatils= await page.getByRole('rowheader').first().textContent();
expect(OrderID.includes(orderIDOrderDeatils)).toBeTruthy();


}
);
}
const {test,expect,request} = require ('@playwright/test');
const APiUtils = require ('../utils/APiUtils.js')

const loginPayload = {userEmail:"durgaprasad9977@gmail.com",userPassword:"Playwright1!"}
const orderPayload = {orders:[{country:"Cuba",productOrderedId:"6960eac0c941646b7a8b3e68"}]}
let response;
 
test.beforeAll(async ()=>
    {
const apiContext = await request.newContext();
const apiUtils = new APiUtils(apiContext,loginPayload)
response = await apiUtils.createOrder(orderPayload);
    }
    )


test ('@API Verify the created Order',async({page})=>
{

await page.addInitScript( value => {
    window.localStorage.setItem('token',value)},response.token);

await page.goto("https://rahulshettyacademy.com/client/#/auth/login");

await page.locator("button[routerlink='/dashboard/myorders']").click();
await page.locator("tbody").waitFor();
const rows = page.locator("tbody tr");

for(let i=0; i<await rows.count(); i++)
{
    const rowOrderID= await rows.nth(i).locator("th").textContent();
    if(response.OrderID.includes(rowOrderID))
    {
        await rows.nth(i).locator("button").first().click();
        break
    }
}

const orderIDOrderDeatils= await page.locator(".col-text").textContent();
expect(response.OrderID.includes(orderIDOrderDeatils)).toBeTruthy();

}
);
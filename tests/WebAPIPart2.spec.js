const {test,expect}=require('@playwright/test');

let webContext;


test.beforeAll ( async ({browser})=>{

const context = await browser.newContext();
const page = await context.newPage();

await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
await page.locator("[id='userEmail']").fill("durgaprasad9977@gmail.com");
await page.locator("[id='userPassword']").fill("Playwright1!");
await page.locator("[id='login']").click();
await page.waitForLoadState('networkidle');
await context.storageState({path : 'state.json'});
webContext = await browser.newContext({storageState:'state.json'});

})

test ('@API Client App Order generation',async()=>
{
const Page = await webContext.newPage();
await Page.goto("https://rahulshettyacademy.com/client/#/auth/login");

const titles = await Page.locator('.card-body b').allTextContents();
console.log(titles);
const Products = Page.locator(".card-body");
const ProductName="ZARA COAT 3"
const count = await Products.count();
for(let i=0; i<count; i++)
{
    if ( await Products.nth(i).locator("b").textContent()===ProductName)
    {

        await Products.nth(i).locator("text= Add To Cart").click();
        break;
    }  
}
await Page.locator("[routerlink*='cart']").click();
await Page.locator("div li").first().waitFor();
const bool = await Page.locator("h3:has-text('ZARA COAT 3')").isVisible();
expect(bool).toBeTruthy();

await Page.locator("text=Checkout").click();
await Page.locator("[placeholder*='Country']").pressSequentially("ind",{delay: 150});
const dropdown = Page.locator(".ta-results")
await dropdown.first().waitFor();
const CountryCount = await dropdown.locator("button").count();

for(let i = 0; i<CountryCount;i++)
{
    const CountryName=await dropdown.locator("button").nth(i).textContent();
    if(CountryName===" India")
    {
        await dropdown.locator("button").nth(i).click();
        break
    }
}
await Page.locator( "[value='4542 9931 9292 2293']").fill("1234567890143");
await Page.locator("[class*='ddl']").first().selectOption("07")
await Page.locator("[class*='ddl']").last().selectOption("19")
await Page.locator('div.field.small  input.input.txt').nth(0).fill("123");
await Page.locator("div.field input.input.txt").nth(2).fill("Durga Prasad");
await Page.locator("[name='coupon']").fill("LoveYouDP<3");

await expect(Page.locator(".user__name.mt-5 [type='text']").first()).toHaveText("durgaprasad9977@gmail.com")
await Page.locator(".action__submit").click();
await expect(Page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
const OrderID= await Page.locator(".em-spacer-1 .ng-star-inserted").textContent();
console.log(OrderID);

await Page.locator("button[routerlink='/dashboard/myorders']").click();
await Page.locator("tbody").waitFor();
const rows = Page.locator("tbody tr");

for(let i=0; i<await rows.count(); i++)
{
    const rowOrderID= rows.nth(i).locator("th").textContent();
    if(OrderID.includes(rowOrderID))
    {
        await rows.nth(i).locator("button").first().click();
        break
    }
}

const orderIDOrderDeatils= await Page.locator(".col-text").textContent();
expect(OrderID.includes(orderIDOrderDeatils)).toBeTruthy();


}
);
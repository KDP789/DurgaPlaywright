const {test,expect}=require('@playwright/test');


test ('CLient App Login',async({browser})=>
{
const Context = await browser.newContext();
const Page = await browser.newPage();
const Email = Page.locator("[id='userEmail']");
const Password = Page.locator("[id='userPassword']")
const Login = Page.locator("[id='login']")
await Page.goto("https://rahulshettyacademy.com/client/#/auth/login");
await Email.fill("durgaprasad9977@gmail.com")
await Password.fill("Playwright1@") 
await Login.click()
console.log( await Page.locator("[id='toast-container']").textContent());
await expect( Page.locator("[id='toast-container']")).toContainText("Incorrect")
await Password.fill("")
await Password.fill("Playwright1!") 
await Login.click()


//console.log(await Page.locator(".card-body b").nth(0).textContent())
await Page.waitForLoadState('networkidle')
await Page.locator('.card-body b').first().textContent();
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
const {test,expect,request}=require('@playwright/test');

test("dpk test", async ({browser})=>
{
    
    const context = await browser.newContext();
    const page = await context.newPage();
   
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await page.locator("#userEmail").fill("durgaprasad9977@gmail.com")
    await page.locator(".form-control.ng-pristine").fill("Playwright1!")
    await page.getByRole("button",{name: 'Login'}).click();
    const items = await page.locator(".col-lg-4").allTextContents();
console.log(items);

}
)
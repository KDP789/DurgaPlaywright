const {test,expect} = require('@playwright/test')

test ('Browser Context test', async ({browser})=>
{
    const Context = await browser.newContext();
    const page = await Context.newPage();
    // page.on("request", request => console.log(request.url()));
    // page.on("response", response => console.log(response.url(), response.status()));
    const userName=page.locator('#username')
    const Password=page.locator("[type='password']")
    const logIn=page.locator("#signInBtn")
    await  page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());
    await page.locator('#username').fill("rahulshetty")
    await page.locator("[type='password']").fill("Learning@830$3mK2")
    await page.locator("#signInBtn").click();
    console.log(await page.locator("[style*='block']").textContent());
    await expect(page.locator("[style*='block']")).toContainText("Incorrect username")
    await userName.fill("")
    await userName.fill("rahulshettyacademy")
    await logIn.click()
    console.log(await page.locator("[class='card-body'] a").first().textContent());
    console.log(await page.locator("[class='card-body'] a").nth(1).textContent());

}
);

test ('@web Page Playwright Test',async ({page})=>
{
 await page.goto("https://www.google.com/");
 console.log(await page.title())
 await expect(page).toHaveTitle("Google");
}
);

test ("DropDown", async ({page})=>
{
await  page.goto("https://rahulshettyacademy.com/loginpagePractise/");
//await page.pause();
await page.locator("#username").fill("rahulshettyacademy");
await page.locator("[name='password']").fill("Learning@830$3mK2");
await page.locator("[data-style='btn-info']").selectOption("consult");
await page.locator("span.checkmark").last().click();
await page.locator(".btn.btn-success").click();
console.log(await page.locator("span.checkmark").last().isChecked())
await expect(page.locator("span.checkmark").last()).toBeChecked();
await page.locator("#terms").check();
await page.locator("#terms").uncheck();
await expect(page.locator("#terms")).not.toBeChecked(); //.isChecked()).toBeFalsy();
const documentLink = page.locator("[href ='https://rahulshettyacademy.com/documents-request']");
await expect(documentLink).toHaveAttribute("class","blinkingText");
}
)

test ("ChildWindowHandel", async({browser})=>
{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    const Link = page.locator("[href*='documents-request']")
   
    const [newPage]=await Promise.all([
     context.waitForEvent('page'),
     Link.click() ])

     const text = await newPage.locator("[class='im-para red']").textContent();
     console.log(text);
     const arrayText = text.split("@")
     const website = arrayText[1].split(" ")[0];
     await page.locator("#username").fill(website);
     const dp = await page.locator('#username').inputValue();
     console.log(dp);
     console.log("Durga Prasad Katta")

}
)
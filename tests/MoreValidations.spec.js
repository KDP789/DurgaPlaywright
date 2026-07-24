import {test,expect} from '@playwright/test';

test.describe.configure({mode : 'serial'});
test("@web PoPup Validations", async ({page})=>
{
await page.goto("https://www.google.com/");
await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
await page.goBack();
await page.goForward();
await expect(page.locator("#displayed-text")).toBeVisible();
await page.locator("#hide-textbox").click();
await expect(page.locator("#displayed-text")).toBeHidden();
await page.locator("#show-textbox").click();
await expect(page.locator("#displayed-text")).toBeVisible();
await page.locator("#name").fill("Durga Prasad Katta");
page.on("dialog",diaglog => diaglog.accept());
await page.locator("#confirmbtn").click();
await page.locator("#mousehover").hover();
const FramePage = page.frameLocator("#courses-iframe");
await FramePage.locator("li a[href='lifetime-access']:visible").click();
const text = await FramePage.locator(".text h2").textContent();
console.log(text.split(" ")[1]);

})


test("@web Screenshot & Visual comparison", async ({page})=>
{
await page.goto("https://www.google.com/");
await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
await page.goBack();
await page.goForward();
await expect(page.locator("#displayed-text")).toBeVisible();
await page.screenshot({path : 'screenshot.png'})
await page.locator("#displayed-text").screenshot({path: "partialScreenshot.jpg"});
await page.locator("#hide-textbox").click();
await expect(page.locator("#displayed-text")).toBeHidden();

})

test("visual", async({page})=>
{
await page.goto("https://flightaware.com/")
expect( await page.screenshot()).toMatchSnapshot('landing.png');



})
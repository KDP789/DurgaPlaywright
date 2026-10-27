const {test, expect} = require('@platwright/test');

test ("testExample", async ({page}) =>
{
await page.goto(" example html url");
await page.locator("login user name locator").fill("username");
await page.locator("password locator").fill("password");
await page.locator("submit").click();
await page.locator("Order management Link locator").click();
await expect( page.locator("tbody").filter({hasText: "ORD-1002"}).getByLabel("Status")).toBevisible("Shipped");
}
)

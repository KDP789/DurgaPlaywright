# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: WebAPIPart2.spec.js >> Client App Order generation
- Location: tests\WebAPIPart2.spec.js:21:1

# Error details

```
"beforeAll" hook timeout of 30000ms exceeded.
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - banner [ref=e4]:
    - generic [ref=e5]:
      - generic [ref=e7]: Ecom
      - generic [ref=e9]:
        - link " dummywebsite@rahulshettyacademy.com" [ref=e11] [cursor=pointer]:
          - /url: emailto:dummywebsite@rahulshettyacademy.com
          - generic [ref=e12]: 
          - text: dummywebsite@rahulshettyacademy.com
        - generic [ref=e13]:
          - link "" [ref=e14] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e15]: 
          - link "" [ref=e16] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e17]: 
          - link "" [ref=e18] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e19]: 
          - link "" [ref=e20] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e21]: 
  - generic [ref=e22]:
    - generic [ref=e23]:
      - heading "We Make Your Shopping Simple" [level=3]
      - heading "Practice Website for Rahul Shetty Academy Students" [level=1] [ref=e24]:
        - text: Practice Website for
        - emphasis [ref=e25]: Rahul Shetty Academy
        - text: Students
      - link "Register" [ref=e26] [cursor=pointer]:
        - /url: "#/auth/register"
    - generic [ref=e28]:
      - paragraph [ref=e29]:
        - generic [ref=e30]: Register to sign in with your personal account
      - generic [ref=e31]:
        - heading "Log in" [level=1] [ref=e32]
        - generic [ref=e33]:
          - generic [ref=e34]:
            - generic [ref=e35]: Email
            - textbox "email@example.com" [ref=e36]
          - generic [ref=e37]:
            - generic [ref=e38]: Password
            - textbox "enter your passsword" [ref=e39]
          - button "Login" [ref=e40] [cursor=pointer]
        - link "Forgot password?" [ref=e41] [cursor=pointer]:
          - /url: "#/auth/password-new"
        - paragraph [ref=e42] [cursor=pointer]: Don't have an account? Register here
  - generic [ref=e43]:
    - heading "Why People Choose Us?" [level=1] [ref=e46]
    - generic [ref=e47]:
      - generic [ref=e48]:
        - generic [ref=e50]: 
        - generic [ref=e51]:
          - heading "3546540" [level=1]
          - paragraph [ref=e52]: Successfull Orders
      - generic [ref=e53]:
        - generic [ref=e55]: 
        - generic [ref=e56]:
          - heading "37653" [level=1]
          - paragraph [ref=e57]: Customers
      - generic [ref=e58]:
        - generic [ref=e60]: 
        - generic [ref=e61]:
          - heading "3243" [level=1]
          - paragraph [ref=e62]: Sellers
    - generic [ref=e63]:
      - generic [ref=e64]:
        - generic [ref=e66]: 
        - generic [ref=e67]:
          - heading "4500+" [level=1]
          - paragraph [ref=e68]: Daily Orders
      - generic [ref=e69]:
        - generic [ref=e71]: 
        - generic [ref=e72]:
          - heading "500+" [level=1]
          - paragraph [ref=e73]: Daily New Customer Joining
```

# Test source

```ts
  1  | const {test,expect}=require('@playwright/test');
  2  | 
  3  | let webContext;
  4  | 
  5  | 
> 6  | test.beforeAll ( async ({browser})=>{
     |      ^ "beforeAll" hook timeout of 30000ms exceeded.
  7  | 
  8  | const context = await browser.newContext();
  9  | const page = await context.newPage();
  10 | 
  11 | await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
  12 | await page.locator("[id='userEmail']").fill("durgaprasad9977@gmail.com");
  13 | await page.locator("[id='userPassword']").fill("Playwright1!");
  14 | await page.locator("[id='login']").click();
  15 | await page.waitForLoadState('networkidle');
  16 | await context.storageState({path : 'state.json'});
  17 | webContext = await browser.newContext({storageState:'state.json'});
  18 | 
  19 | })
  20 | 
  21 | test ('Client App Order generation',async()=>
  22 | {
  23 | const Page = await webContext.newPage();
  24 | await Page.goto("https://rahulshettyacademy.com/client/#/auth/login");
  25 | 
  26 | const titles = await Page.locator('.card-body b').allTextContents();
  27 | console.log(titles);
  28 | const Products = Page.locator(".card-body");
  29 | const ProductName="ZARA COAT 3"
  30 | const count = await Products.count();
  31 | for(let i=0; i<count; i++)
  32 | {
  33 |     if ( await Products.nth(i).locator("b").textContent()===ProductName)
  34 |     {
  35 | 
  36 |         await Products.nth(i).locator("text= Add To Cart").click();
  37 |         break;
  38 |     }  
  39 | }
  40 | await Page.locator("[routerlink*='cart']").click();
  41 | await Page.locator("div li").first().waitFor();
  42 | const bool = await Page.locator("h3:has-text('ZARA COAT 3')").isVisible();
  43 | expect(bool).toBeTruthy();
  44 | 
  45 | await Page.locator("text=Checkout").click();
  46 | await Page.locator("[placeholder*='Country']").pressSequentially("ind",{delay: 150});
  47 | const dropdown = Page.locator(".ta-results")
  48 | await dropdown.first().waitFor();
  49 | const CountryCount = await dropdown.locator("button").count();
  50 | 
  51 | for(let i = 0; i<CountryCount;i++)
  52 | {
  53 |     const CountryName=await dropdown.locator("button").nth(i).textContent();
  54 |     if(CountryName===" India")
  55 |     {
  56 |         await dropdown.locator("button").nth(i).click();
  57 |         break
  58 |     }
  59 | }
  60 | await Page.locator( "[value='4542 9931 9292 2293']").fill("1234567890143");
  61 | await Page.locator("[class*='ddl']").first().selectOption("07")
  62 | await Page.locator("[class*='ddl']").last().selectOption("19")
  63 | await Page.locator('div.field.small  input.input.txt').nth(0).fill("123");
  64 | await Page.locator("div.field input.input.txt").nth(2).fill("Durga Prasad");
  65 | await Page.locator("[name='coupon']").fill("LoveYouDP<3");
  66 | 
  67 | await expect(Page.locator(".user__name.mt-5 [type='text']").first()).toHaveText("durgaprasad9977@gmail.com")
  68 | await Page.locator(".action__submit").click();
  69 | await expect(Page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
  70 | const OrderID= await Page.locator(".em-spacer-1 .ng-star-inserted").textContent();
  71 | console.log(OrderID);
  72 | 
  73 | await Page.locator("button[routerlink='/dashboard/myorders']").click();
  74 | await Page.locator("tbody").waitFor();
  75 | const rows = Page.locator("tbody tr");
  76 | 
  77 | for(let i=0; i<await rows.count(); i++)
  78 | {
  79 |     const rowOrderID= rows.nth(i).locator("th").textContent();
  80 |     if(OrderID.includes(rowOrderID))
  81 |     {
  82 |         await rows.nth(i).locator("button").first().click();
  83 |         break
  84 |     }
  85 | }
  86 | 
  87 | const orderIDOrderDeatils= await Page.locator(".col-text").textContent();
  88 | expect(OrderID.includes(orderIDOrderDeatils)).toBeTruthy();
  89 | 
  90 | 
  91 | }
  92 | );
```
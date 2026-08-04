# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: WebAPIPart2.spec.js >> Client App Order generation
- Location: tests\WebAPIPart2.spec.js:21:1

# Error details

```
Error: locator.textContent: Error: strict mode violation: locator('.em-spacer-1 .ng-star-inserted') resolved to 2 elements:
    1) <label _ngcontent-iue-c44="" class="ng-star-inserted"> | 6a491a3785b8849b49c9d6fe | </label> aka getByText('| 6a491a3785b8849b49c9d6fe |')
    2) <label _ngcontent-iue-c44="" class="ng-star-inserted"> | 6a491a3785b8849b49c9d701 | </label> aka getByText('| 6a491a3785b8849b49c9d701 |')

Call log:
  - waiting for locator('.em-spacer-1 .ng-star-inserted')

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - navigation [ref=e5]:
    - generic [ref=e7]:
      - link "Automation Automation Practice":
        - /url: ""
        - generic [ref=e8] [cursor=pointer]:
          - heading "Automation" [level=3] [ref=e9]
          - paragraph [ref=e10]: Automation Practice
    - text: 
    - link "Get Shortlisted by Recruiters - Take QA Skill Assessments on TechSmartHire" [ref=e11] [cursor=pointer]:
      - /url: https://techsmarthire.com/
    - list [ref=e12]:
      - listitem [ref=e13] [cursor=pointer]:
        - button " HOME" [ref=e14]:
          - generic [ref=e15]: 
          - text: HOME
      - listitem
      - listitem [ref=e16] [cursor=pointer]:
        - button " ORDERS" [ref=e17]:
          - generic [ref=e18]: 
          - text: ORDERS
      - listitem [ref=e19] [cursor=pointer]:
        - button " Cart" [ref=e20]:
          - generic [ref=e21]: 
          - text: Cart
      - listitem [ref=e22] [cursor=pointer]:
        - button "Sign Out" [ref=e23]:
          - generic [ref=e24]: 
          - text: Sign Out
  - text:    
  - generic [ref=e25]:
    - paragraph [ref=e26]: Home | Search
    - heading "Filters" [level=4] [ref=e28]
    - generic [ref=e29]:
      - textbox "search" [ref=e31]
      - generic [ref=e32]:
        - heading "Price Range" [level=6] [ref=e33]
        - generic [ref=e34]:
          - textbox "Min Price" [ref=e36]
          - textbox "Max Price" [ref=e38]
      - generic [ref=e39]:
        - heading "Categories" [level=6] [ref=e40]
        - generic [ref=e42]: 
        - generic [ref=e43]:
          - checkbox [ref=e44]
          - generic [ref=e45]: fashion
        - generic [ref=e46]:
          - checkbox [ref=e47]
          - generic [ref=e48]: electronics
        - generic [ref=e49]:
          - checkbox [ref=e50]
          - generic [ref=e51]: household
      - generic [ref=e52]:
        - heading "Sub Categories" [level=6] [ref=e53]
        - generic [ref=e55]: 
        - generic [ref=e56]:
          - checkbox [ref=e57]
          - generic [ref=e58]: t-shirts
        - generic [ref=e59]:
          - checkbox [ref=e60]
          - generic [ref=e61]: shirts
        - generic [ref=e62]:
          - checkbox [ref=e63]
          - generic [ref=e64]: shoes
        - generic [ref=e65]:
          - checkbox [ref=e66]
          - generic [ref=e67]: mobiles
        - generic [ref=e68]:
          - checkbox [ref=e69]
          - generic [ref=e70]: laptops
      - generic [ref=e71]:
        - heading "Search For" [level=6] [ref=e72]
        - generic [ref=e74]: 
        - generic [ref=e75]:
          - checkbox [ref=e76]
          - generic [ref=e77]: men
        - generic [ref=e78]:
          - checkbox [ref=e79]
          - generic [ref=e80]: women
  - generic [ref=e81]:
    - generic [ref=e82]:
      - generic [ref=e83]:
        - generic [ref=e84]: Showing 3 results |
        - generic [ref=e85]: User can only see maximum 9 products on a page
      - generic [ref=e86]:
        - generic [ref=e88]:
          - img [ref=e89]
          - generic [ref=e90]:
            - heading "ADIDAS ORIGINAL" [level=5] [ref=e91]
            - generic [ref=e93]: $ 11500
            - button "View" [ref=e94] [cursor=pointer]:
              - generic [ref=e95]: 
              - text: View
            - button " Add To Cart" [ref=e96] [cursor=pointer]:
              - generic [ref=e97]: 
              - text: Add To Cart
        - generic [ref=e99]:
          - img [ref=e100]
          - generic [ref=e101]:
            - heading "ZARA COAT 3" [level=5] [ref=e102]
            - generic [ref=e104]: $ 11500
            - button "View" [ref=e105] [cursor=pointer]:
              - generic [ref=e106]: 
              - text: View
            - button " Add To Cart" [ref=e107] [cursor=pointer]:
              - generic [ref=e108]: 
              - text: Add To Cart
        - generic [ref=e110]:
          - img [ref=e111]
          - generic [ref=e112]:
            - heading "iphone 13 pro" [level=5] [ref=e113]
            - generic [ref=e115]: $ 55000
            - button "View" [ref=e116] [cursor=pointer]:
              - generic [ref=e117]: 
              - text: View
            - button " Add To Cart" [ref=e118] [cursor=pointer]:
              - generic [ref=e119]: 
              - text: Add To Cart
    - list "Pagination" [ref=e124]:
      - listitem [ref=e125]:
        - text: «
        - generic [ref=e126]:
          - text: Previous
          - generic [ref=e127]: page
      - listitem [ref=e128]:
        - generic [ref=e129]: You're on page
        - text: "1"
      - listitem [ref=e130]:
        - generic [ref=e131]:
          - text: Next
          - generic [ref=e132]: page
        - text: »
  - generic [ref=e133]: Design and Developed By - Kunal Sharma
```

# Test source

```ts
  1  | const {test,expect}=require('@playwright/test');
  2  | 
  3  | let webContext;
  4  | 
  5  | 
  6  | test.beforeAll ( async ({browser})=>{
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
> 70 | const OrderID= await Page.locator(".em-spacer-1 .ng-star-inserted").textContent();
     |                                                                     ^ Error: locator.textContent: Error: strict mode violation: locator('.em-spacer-1 .ng-star-inserted') resolved to 2 elements:
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
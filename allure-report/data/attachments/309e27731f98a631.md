# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: UIBasicstest.spec.js >> DropDown
- Location: tests\UIBasicstest.spec.js:36:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.check: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('#terms')
    - locator resolved to <input id="terms" name="terms" type="checkbox"/>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div id="myModal" class="modal fade show">…</div> intercepts pointer events
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div id="myModal" class="modal fade show">…</div> intercepts pointer events
    - retrying click action
      - waiting 100ms
    58 × waiting for element to be visible, enabled and stable
       - element is visible, enabled and stable
       - scrolling into view if needed
       - done scrolling
       - <div id="myModal" class="modal fade show">…</div> intercepts pointer events
     - retrying click action
       - waiting 500ms

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e2]:
    - link "Free Access to InterviewQues/ResumeAssistance/Material" [ref=e3] [cursor=pointer]:
      - /url: https://rahulshettyacademy.com/documents-request
    - link "Get Shortlisted by Recruiters - Take QA Skill Assessments on TechSmartHire" [ref=e4] [cursor=pointer]:
      - /url: https://techsmarthire.com/
  - generic [ref=e5]:
    - heading [level=3] [ref=e6]:
      - img [ref=e8]
    - generic [ref=e14]:
      - generic [ref=e15]:
        - generic [ref=e16]: "Username:"
        - textbox "Username:" [ref=e17]: rahulshettyacademy
      - generic [ref=e18]:
        - generic [ref=e19]: "Password:"
        - textbox "Password:" [ref=e20]: Learning@830$3mK2
      - generic [ref=e22]:
        - generic [ref=e23] [cursor=pointer]:
          - text: Admin
          - radio "Admin" [ref=e24]
        - generic [ref=e26] [cursor=pointer]:
          - text: User
          - radio "User" [checked] [ref=e27]
      - combobox [ref=e30]:
        - option "Student"
        - option "Teacher"
        - option "Consultant" [selected]
      - generic [ref=e31]:
        - generic [ref=e32]:
          - checkbox "I Agree to the terms and conditions" [ref=e34]
          - generic [ref=e35]:
            - text: I Agree to the
            - link "terms and conditions" [ref=e36] [cursor=pointer]:
              - /url: "#"
        - button "Sign In" [ref=e37] [cursor=pointer]
      - paragraph [ref=e39]:
        - text: (username is
        - generic [ref=e40]: rahulshettyacademy
        - text: and Password is
        - generic [ref=e41]: Learning@830$3mK2
        - text: )
  - generic [ref=e43]:
    - paragraph [ref=e45]: You will be limited to only fewer functionalities of the app. Proceed?
    - generic [ref=e46]:
      - button "Cancel" [ref=e47] [cursor=pointer]
      - button "Okay" [active] [ref=e48] [cursor=pointer]
```

# Test source

```ts
  1  | const {test,expect} = require('@playwright/test')
  2  | 
  3  | test ('Browser Context test', async ({browser})=>
  4  | {
  5  |     const Context = await browser.newContext();
  6  |     const page = await Context.newPage();
  7  |     // page.on("request", request => console.log(request.url()));
  8  |     // page.on("response", response => console.log(response.url(), response.status()));
  9  |     const userName=page.locator('#username')
  10 |     const Password=page.locator("[type='password']")
  11 |     const logIn=page.locator("#signInBtn")
  12 |     await  page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  13 |     console.log(await page.title());
  14 |     await page.locator('#username').fill("rahulshetty")
  15 |     await page.locator("[type='password']").fill("Learning@830$3mK2")
  16 |     await page.locator("#signInBtn").click();
  17 |     console.log(await page.locator("[style*='block']").textContent());
  18 |     await expect(page.locator("[style*='block']")).toContainText("Incorrect username")
  19 |     await userName.fill("")
  20 |     await userName.fill("rahulshettyacademy")
  21 |     await logIn.click()
  22 |     console.log(await page.locator("[class='card-body'] a").first().textContent());
  23 |     console.log(await page.locator("[class='card-body'] a").nth(1).textContent());
  24 | 
  25 | }
  26 | );
  27 | 
  28 | test ('@web Page Playwright Test',async ({page})=>
  29 | {
  30 |  await page.goto("https://www.google.com/");
  31 |  console.log(await page.title())
  32 |  await expect(page).toHaveTitle("Google");
  33 | }
  34 | );
  35 | 
  36 | test ("DropDown", async ({page})=>
  37 | {
  38 | await  page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  39 | //await page.pause();
  40 | await page.locator("#username").fill("rahulshettyacademy");
  41 | await page.locator("[name='password']").fill("Learning@830$3mK2");
  42 | await page.locator("[data-style='btn-info']").selectOption("consult");
  43 | await page.locator("span.checkmark").last().click();
  44 | await page.locator(".btn.btn-success").click();
  45 | console.log(await page.locator("span.checkmark").last().isChecked())
  46 | await expect(page.locator("span.checkmark").last()).toBeChecked();
> 47 | await page.locator("#terms").check();
     |                              ^ Error: locator.check: Test timeout of 30000ms exceeded.
  48 | await page.locator("#terms").uncheck();
  49 | await expect(page.locator("#terms")).not.toBeChecked(); //.isChecked()).toBeFalsy();
  50 | const documentLink = page.locator("[href ='https://rahulshettyacademy.com/documents-request']");
  51 | await expect(documentLink).toHaveAttribute("class","blinkingText");
  52 | }
  53 | )
  54 | 
  55 | test ("ChildWindowHandel", async({browser})=>
  56 | {
  57 |     const context = await browser.newContext();
  58 |     const page = await context.newPage();
  59 |     await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
  60 |     const Link = page.locator("[href*='documents-request']")
  61 |    
  62 |     const [newPage]=await Promise.all([
  63 |      context.waitForEvent('page'),
  64 |      Link.click() ])
  65 | 
  66 |      const text = await newPage.locator("[class='im-para red']").textContent();
  67 |      console.log(text);
  68 |      const arrayText = text.split("@")
  69 |      const website = arrayText[1].split(" ")[0];
  70 |      await page.locator("#username").fill(website);
  71 |      const dp = await page.locator('#username').inputValue();
  72 |      console.log(dp);
  73 |      console.log("Durga Prasad Katta")
  74 | 
  75 | }
  76 | )
```
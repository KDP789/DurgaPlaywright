import {test,expect} from '@playwright/test'

test ("assignemet2", async ({page})=>{
    
    await page.goto("https://eventhub.rahulshettyacademy.com");
    await page.getByPlaceholder("you@email.com").fill("durgaprasad9977@gmail.com")
    await page.getByPlaceholder("••••••").fill("Playwright1!")
    await page.getByRole("button",{name:'Sign In'}).click();
    await page.getByRole("link",{name: 'Events',exact: true }).click();
   // await page.locator(".grid-cols-1 article").getByRole("button",{name:'Book Now'}).first().click();
    await page.getByTestId('event-card').first().getByTestId('book-now-btn').click();
    await page.getByPlaceholder("Your full name").fill("DurgaPrasad");
    await page.getByPlaceholder("you@email.com").fill("durgaprasad9977@gmail.com")
    await page.getByPlaceholder("+91 98765 43210").fill("9998887776");
    await page.getByRole("button",{name:'View My Bookings'}).click();
    await expect(page).toHaveURL('https://eventhub.rahulshettyacademy.com/bookings');
    await page.locator(".space-y-4 #booking-card").first().getByRole("button",{name:'View Details'}).click();
    await expect(page.getByText("Booking Information")).toBeVisible();
    const Eventtitle = await page.locator('.text-2xl').textContent();



    
    })
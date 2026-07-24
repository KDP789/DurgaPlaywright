import {test, expect} from '@playwright/test'

test("Assignment1", async({page})=>
{
const BASE_URL="https://eventhub.rahulshettyacademy.com"
await page.goto(BASE_URL);
await page.getByPlaceholder("you@email.com").fill("durgaprasad9977@gmail.com");
await page.getByPlaceholder("••••••").fill("Playwright1!");
await page.getByRole("button",{name:'Sign In'}).click();
await expect(page.getByText("Browse Events →")).toBeVisible();
await page.getByRole('link', { name: 'Browse Events →' }).click();
await page.getByRole('button', { name: 'Add New Event' }).click();
const title= "LoveDP143"
await page.locator("#event-title-input").fill(title);
await page.getByPlaceholder("Describe the event…").fill("Playwright test automation learning by Durga Prasad Katta");
await page.locator("#category").selectOption("Conference");
await page.getByLabel("City").fill("Hyderabad");
await page.getByLabel("Venue").fill("My Home");
await page.getByLabel("Event Date & Time").fill("2027-12-12T12:12");//2027-12-12T12:12
await page.getByLabel("Price ($)").fill("299");
await page.getByLabel("Total Seats").fill("18")
await page.getByRole('button', { name: '+ Add Event' }).click();
await expect(page.getByText('Event created!')).toBeVisible();
await page.locator("#nav-events").click();
const EventsList= page.locator(".grid article");
await page.locator(".grid article").nth(0).isVisible();
await expect(page.locator(".grid article").filter({hasText: title})).toBeVisible();
const seatsString = await page.locator(".grid article").filter({hasText:title}).locator(".text-xs.font-semibold.text-emerald-600").textContent();
const seatsBeforeBooking = Number(seatsString.match(/\d+/)[0]);
//console.log(seatsBeforeBooking);
await page.locator(".grid article").filter({hasText:title}).locator("[data-testid='book-now-btn']").click();
const TicketCount = await page.locator("#ticket-count").textContent();
expect(TicketCount).toEqual("1");
await page.getByLabel("Full Name").fill("Durga");
await page.locator("#customer-email").fill("Durga@prasad.com");
await page.getByPlaceholder("+91 98765 43210").fill("9998887776");
await page.locator(".confirm-booking-btn").click();
await expect(page.locator(".booking-ref")).toBeVisible();
const bookingRefText = await page.locator(".booking-ref").textContent();
const bookingRef= bookingRefText.trim();
await page.getByRole("link",{name:"View My Bookings"}).click();
await expect(page).toHaveURL(BASE_URL + "/bookings");
const BookingCards= page.locator("#booking-card")
await BookingCards.nth(0).isVisible();
await BookingCards.filter({hasText:bookingRef}).isVisible();
expect(BookingCards.filter({hasText:bookingRef}).locator("h3")).toHaveText(title);
await page.locator("#nav-events").click();
await page.locator(".grid article").nth(0).isVisible();
await page.locator(".grid article").filter({hasText:title}).isVisible();
const seatsAfterBookingText=await page.locator(".grid article").filter({hasText:title}).locator(".text-xs.font-semibold.text-emerald-600").textContent();
const seatsAfterBooking = Number(seatsAfterBookingText.match(/\d+/)[0]);
expect(seatsBeforeBooking).toEqual(seatsAfterBooking+1);

})
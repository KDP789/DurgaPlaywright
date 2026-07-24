import {test, expect} from '@playwright/test'

test("Calendor Handling", async ({page})=>
{
    await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");
    const Month = "6";
    const Date ="15"
    const Year = "2027"
    const expectedList= [Month,Date,Year]

    await page.locator(".react-date-picker__inputGroup").click();
    await page.locator(".react-calendar__navigation__label__labelText--from").click()
    await page.locator(".react-calendar__navigation__label__labelText--from").click()
    await page.getByText(Year).click()
    await page.locator(".react-calendar__year-view__months button").nth(Number(Month)-1).click();
    await page.locator(".react-calendar__month-view__days .react-calendar__month-view__days__day").getByText(Date).click();

    const inputs = page.locator(".react-date-picker__inputGroup .react-date-picker__inputGroup__input");

    for(let i=0; i<expectedList.length; i++)
    {
        const value= await inputs.nth(i).inputValue();
        expect(value).toEqual(expectedList[i]);
    }

}
)
const {test, expect } = require("@playwright/test");
const { PassThrough } = require("node:stream");


        test("Calender Test", async ({page})=>
        {


            const month =6;
            const date= 15;
            const year="2027";

            const expectedlist = [month,date,year]
            await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");
            await page.locator(".react-date-picker__inputGroup").click();
            await page.locator(".react-calendar__navigation__label").click();
            await page.locator(".react-calendar__navigation__label").click();
            await page.getByText(year).click();//Date
       
            await page.locator(".react-calendar__year-view__months__month").nth(Number(month-1)).click();//Month
            await page.locator("//abbr[text()='"+date+"']").click(); //year

         const inputs =   await page.locator(".react-date-picker__inputGroup input")

           for(let i =0; i<expectedlist.length;i++)
    {
        const value = await inputs.nth(i).inputValue();
        expect(value).toEqual(expectedlist[i]);
 
    }
       
  




        });
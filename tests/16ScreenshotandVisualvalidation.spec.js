const {test, expect} = require('@playwright/test')

test('Screenshot', async ({page})=>
{
   
       await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

       expect(page.locator("#displayed-text")).toBeVisible();
       page.locator("#displayed-text").screenshot({path:'partialscreenshot.png'});//this gives aprtialscreenshot

       await page.screenshot({path: 'screenshot.png'})//fullscreenshot of the page

});

test('Visual validation', async ({page})=>
{


    await page.goto("https://google.com/");
    expect(await page.screenshot()).toMatchSnapshot('googlesnapshot.png'); // this is used to compare the current screenshot with the previous screenshot and if there is any difference then it will fail the test and it will show the difference in the console and we can use this to validate the UI of the application
});
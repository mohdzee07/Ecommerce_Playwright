
const {test,expect} = require ('@playwright/test')  

test('Child window handling', async({browser})=>
{
    const context = await  browser.newContext();//It means it open a new browse
    const page = await context.newPage();//Open a anew page in the browser

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

    const blinktext = page.locator("[href*='documents-request']");



    //Promise.all is used to wait for multiple promises to resolve before proceeding with the next steps in the test. 
    // In this case, we are waiting for the new page to open when we click on the link and then we can switch to that child window and perform 
    // actions on it.
    const [newpage] = await Promise.all([
        context.waitForEvent('page'), ////listen for any new page pending,rejected,fulfilled wait for the new page to open when we click on the link
        blinktext.click() //New page is opened when we click on the link
    ])

    await newpage.waitForLoadState();
    console.log(await newpage.locator(".red").textContent());
    

});
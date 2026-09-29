const{test,expect} = require("@playwright/test");

test("Handling HIdden Elements", async({page})=>
{

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    // await page.goto("https://rahulshettyacademy.com")
    // page.goBack();
    
     await expect(page.locator("#displayed-text")).toBeVisible();

     await page.locator("#hide-textbox").click();

     await expect(page.locator("#displayed-text")).toBeHidden();
     


     //Handle popups
     page.on('dialog',dialog=> dialog.accept());

     await page.locator("#confirmbtn").click();

     //handling hover button

     await page.locator("#mousehover").hover();

});
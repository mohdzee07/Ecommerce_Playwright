const{test,expect} = require("@playwright/test");

test("Handling HIdden Elements", async({page})=>
{

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

   const framespage = page.frameLocator("#courses-iframe");

   //when we have a hidden elemnt then we use vivible in the locator to select the visible item in the locator
   framespage.locator("li a[href*='lifetime-access']:visible").click();
   //to fetrch number from frame

   const framtext = await framespage.locator(".text h2").textContent();
   // split using space so number is oresent in inde =x 1
   console.log(framtext.split(" ")[1]);


});

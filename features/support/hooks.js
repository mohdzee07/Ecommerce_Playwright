
//https://github.com/cucumber/cucumber-js/blob/main/docs/support_files/hooks.md --- refer this link for hooks concepts
const { Before, After, BeforeStep, AfterStep, Status } = require("@cucumber/cucumber");
const { POManager } = require('../../pageobject/POManager');
const playwright = require('@playwright/test')


Before(async function(){

 const browser =await playwright.chromium.launch(
   {
      headless:false
    }
   );
   const context = await browser.newContext();
   this.page = await context.newPage();
   this.poManger = new POManager(this.page) //We use this here it lacts like a world construnctor where we can access poManager pbj anywhere in the scenario as used below

});


BeforeStep(function ()
{
    //this executed before each step
})

AfterStep(async function ({result})
{
    if(result.status === Status.FAILED)
    {
         await this.page.screenshot({path:'screenshot1.png'})
    }
    
})


After(function()
{
    console.log("test ends here")
})
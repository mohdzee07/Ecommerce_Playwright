    const {test, expect } = require("@playwright/test")


    test("PW pratcise test", async ({page})=>
    {


       await page.goto("https://rahulshettyacademy.com/client/#/dashboard/dash");

        const username= page.locator("#userEmail");
        const password = page.locator("#userPassword");
        const  login = page.locator("#login")
        await username.fill("mehu141411@gmail.com");
        await password.fill("Mehu@123");
        await login.click();
        console.log(await page.locator("[role='alert']").textContent());
        console.log (await expect(page.locator("[role='alert']")).toContainText("Incorrect"));
        await username.fill("");
        await username.fill("mehu1414@gmail.com");
        await login.click();


        //get the first text
      //console.log(await page.locator(".card-body b").first().textContent());
      //get all ther text

      //OR use waitforloadstate to wait for the element to be visible and then fetch the text content
      //the below steps says to wait until the network is idle
      await page.waitForLoadState('networkidle'); //IMP step IV


      //or use this for wait if above step is not working
       await page.locator(".card-body b").first().waitFor(); //IMP step V

      //we cannot execute this step as alltextcontexts does not have wait keyword and it will return an array of text content and we cannot apply assertion on array of text content so we need to use toContainText instead of toHaveText
      //so for this we need to execte the above step and then we can apply assertion on the array of text content
       console.log(await page.locator(".card-body b").allTextContents());

        });


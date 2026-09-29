const {test, expect } = require("@playwright/test")

test("Special Locators", async({page})=>
{


     await page.goto("https://rahulshettyacademy.com/angularpractice/");


     //1) getByLable Locator
      await page.getByLabel("Check me out if you Love IceCreams!").click();

      await page.getByLabel("Employed").check();

      await page.getByLabel("Gender").selectOption("Female")

      //2)getByPlaceholder

         //await page.getByLabel("Email").clear();
        // await page.getByLabel("Email").fill("mehu1414@gmail.com")

      //await page.getByPlaceholder("Password").clear();

      await page.getByPlaceholder("Password").fill("Mehu@123")

      //3) getByrole

      await page.getByRole("button", {name: 'Submit'}).click();

      //4 getByText

      await page.getByText(" The Form has been submitted successfully!.").isVisible();


      await page.getByRole("link",{name : 'Shop'}).click();

      //chaing of locators//filter is used to 
      await page.locator("app-card").filter({hasText: 'Nokia Edge'}).getByRole("button").click();


      //page.pause();

});
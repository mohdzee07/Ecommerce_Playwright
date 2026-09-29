const {test, expect} = require('@playwright/test')

test('Dropdown', async ({page})=>
{
   
       await page.goto("https://rahulshettyacademy.com/loginpagePractise/");


        const username= page.locator("#username");
        const password = page.locator("#password");
        const  login = page.locator("#signInBtn");
        await username.fill("mehu1414@gmail.com");
        await password.fill("Mehu@123");

        //Valuemethod is used to fetch the value of the attribute and apply assertion
        console.log(await username.inputValue());

         //Select static dropdown
        const dropdwon1 = await page.locator("select.form-control")
        await dropdwon1.selectOption("Student") //select by value
        //console.log(expect(await dropdwon1.inputValue().toBe("Student")))
       //Pause
       
      

       //select radio button

       const radiobuton = page.locator(".radiotextsty").last().click();
      

      //Handle pop-ups
      const popup = await page.locator("#okayBtn").click();

      //assesrtion to confirm is radio button is checked

      console.log(await expect(page.locator(".radiotextsty").last()).toBeChecked());

      //Checkboxes

      const checkbox = page.locator("#terms");
      await checkbox.check();

      //Assesrtion to see if checkbox is checked

      console.log(await expect(checkbox).toBeChecked());

      //to uncheck the chekbox

      await checkbox.uncheck();
      //We cannot use assetion for uncecked state so we will use if condition to validate the uncheck state

      console.log(await checkbox.isChecked());

      //WE CAN USE BELOW ASSERION FOR UNCHECK

      console.log(await expect(checkbox).not.toBeChecked());

      //capture the blinking text

      const blinktext = page.locator("[href*='documents-request']");
      await expect(blinktext).toHaveAttribute("class","blinkingText");


      //
     

      await page.pause();
      await page.close();

});


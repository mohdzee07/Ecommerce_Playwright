    const {test, expect} = require('@playwright/test');


    // test('Browser context PW test',async ({browser})=>
    // {

    //     // this 2 steps arent required if we pass "page" fixxure 
    //     const context = await browser.newContext();
    //     const page = await context.newPage();
    //     await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

    // });

    test('PagePW test',async ({page})=>
    {

        await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

        //get the page titile and apply asserstions
                const pagetitile = await page.title()
                console.log(pagetitile)
                
    //assesrtion to validate the page title
             //await expect(page).toHaveTitle("Google");


             //css selectors
            const username = page.locator("#username");
            const signin =page.locator("#signInBtn");
            const cardtitle = page.locator(".card-body a");
           await  username.fill("rahulshetty123");
           await  page.locator("[name='password']").fill("Learning@830$3mK2");
           await page.locator("[type='checkbox']").check();
           
        await   signin.click();
   //handling dynamci locators
         console.log(await page.locator("[style*='block']").textContent());
    //Assesrtion to verify the substr of the text 
          await expect(page.locator("[style*='block']")).toContainText("Incorrect");

          //to clear a text field we use ""
          await username.fill("");
          await username.fill("rahulshettyacademy");
          await signin.click();

          //to fecth the iphone x text and apply assertion

          //firsyt() is used to fetch the first eelement or use nth(0)
           console.log(await page.locator(".card-body a").first().textContent());

           //or
           console.log(await cardtitle.nth(1).textContent());
            
           //Grabbing all the titles and print them in console
           const alltitles = await cardtitle.allTextContents();
           console.log(alltitles);
    })
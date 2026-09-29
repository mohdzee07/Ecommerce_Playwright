    const {test, expect } = require("@playwright/test")


        test("End to End Test", async ({page})=>
        {


        await page.goto("https://rahulshettyacademy.com/client");

        const products = page.locator(".card-body");

        const productName = "ZARA COAT 3";

            const username= page.locator("#userEmail");
            const password = page.locator("#userPassword");
            const  login = page.locator("#login")
            await username.fill("mehu1414@gmail.com");
            await password.fill("Mehu@123");
            await login.click();
            await page.waitForLoadState('networkidle'); //IMP step IV  //IMP step IV

            await page.locator(".card-body b").first().waitFor(); //used to wait until alll the products are visible on the page

        const titles = await page.locator(".card-body b").allTextContents();
        console.log(titles);

        const count = await products.count();

        for(let i=0; i<count ; i++)
        {
        

            if(await products.nth(i).locator("b").textContent() === productName) //Chaining a locator to fetch the text content and then apply condition
            {
                //add the prodcut to cart when matches
                await products.nth(i).locator("text= Add To Cart").click();
                break;
            }


        }

        await page.locator("[routerlink='/dashboard/cart']").click();

        //once cart is clicked we need to wait until the cart page is loaded and then we will fetch the text content of the product in the cart and then apply assertion
        //await page.waitForLoadState('networkidle');
        await page.locator("div li").first().waitFor(); //wait for used to wait until li element is visible on the page
        //since isvisble does not have auto wait 

        //this kind of locator is used when we have text
        //h3 is a tag and we are using has text to fetch the element which has the text as ZARA COAT 3

        const bool = await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
        expect(bool).toBeTruthy();

        await page.locator("text=Checkout").click();

        //Presssequentially is used to type the text one by one with some delay in 
        // between and it is used when we have auto suggestion dropdown and we need to 
        // select the value from the dropdown
        await page.locator("[placeholder*='Country']").pressSequentially("ind", {delay:100});

        //select the value from the auto suggestion dropdown

          
   const dropdown = page.locator(".ta-results");
   await dropdown.waitFor();
   const optionsCount = await dropdown.locator("button").count();
   for (let i = 0; i < optionsCount; ++i) {
      const text = await dropdown.locator("button").nth(i).textContent();
      if (text === " India") {
         await dropdown.locator("button").nth(i).click();
         break;
      }
   }

   //click on placeorder button

   await page.locator(".btnn").click();
    const fetchid= await page.locator("td label").nth(1)
    //await fetchid.waitFor();
    const orderid= await fetchid.textContent()
    console.log("Print:" + orderid);

    //click on the oder link

    await page.locator("button[routerlink*='myorders']").click();

    await page.locator("tbody").waitFor();
    const rowcount= await page.locator("tbody tr");
    
    for(let i=0 ;i< await rowcount.count(); i++)
    {
              
        const rowOrderid = await rowcount.nth(i).locator("th").textContent();
        if(orderid.includes(rowOrderid)) //we use inculdes as it can avoi gaps,deleimters
        {
             await rowcount.nth(i).locator("button").first().click(); 
             break;
        }

    }

     const orderpageid = await page.locator(".col-text").textContent();
     console.log(orderpageid)
     expect(orderid.includes(orderpageid)).toBeTruthy();
    

        
        //await page.pause();
        



        });
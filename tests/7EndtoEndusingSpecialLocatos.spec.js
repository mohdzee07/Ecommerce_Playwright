const {test,expect} = require ("@playwright/test");

test("EndtoEndUsingSpecialLocators",  async({page})=>
{

    await page.goto("https://rahulshettyacademy.com/client");
    await page.getByPlaceholder("email@example.com").fill("mehu1414@gmail.com");
    await page.getByPlaceholder("enter your passsword").fill("Mehu@123");
     await page.getByRole("button", {name:"login"}).click();
     await page.waitForLoadState('networkidle');
     await page.locator(".card-body").first().waitFor();

     //select ZARA COAT 3
     await page.locator(".card-body").filter({hasText:"ZARA COAT 3"}).getByRole("button", {name:"Add to Cart"}).click();

     //clci on cart button

     await page.getByRole("listitem").getByRole("button", {name:"  Cart "}).click();

     //wait fro page to load henc use waitfor()

     await page.locator("div li").first().waitFor();

     await expect(page.getByText("ZARA COAT 3")).toBeVisible();

     await page.getByRole("button", {name:'Checkout'}).click();

     await page.getByPlaceholder("Select Country").pressSequentially("ind");

     await page.getByText("India").nth(1).click();

    //clcik on Place order

    await page.getByText("Place Order").click();

    //To find thank you text

    await expect (page.getByText("Thankyou for the order")).toBeVisible();

    //To fetch the ordr id

    
 
    const firstoderid=await page.locator(".ng-star-inserted").nth(1).allTextContents();
    console.log(await page.locator(".ng-star-inserted").nth(1).allTextContents());

    await page.getByRole("listitem").getByRole("button", {name: "ORDERS"}).click();

    //to find the oderid
    await page.locator("tbody").waitFor();

    const orderidrow = await page.locator("tbody tr")

    
    for(let i=0; i<await orderidrow.count; i++)
    {

        console.log(i)
          
        // const finalorder = await orderidrow.nth(i).locator("th").textContent();
        // if(firstoderid.includes(finalorder))
        // {
        //     const clickview = await  orderidrow.nth(i).locator("button").nth(4).click();
        //     break;
        // }

    }
    //page.pause();

})
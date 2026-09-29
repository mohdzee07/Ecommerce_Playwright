    const {test, expect}=  require('@playwright/test')


    test("DD amd radio, checbox", async({page})=>
    {

    await page.goto("https://rahulshettyacademy.com/dropdownsPractise/")
    await page.locator('#autosuggest').fill("india")

    
    //checkoboxes
    await page.locator("#ctl00_mainContent_rbtnl_Trip_1").check();
    await expect(page.locator("#ctl00_mainContent_rbtnl_Trip_1")).toBeChecked();

    //check other 

    await page.locator("#ctl00_mainContent_rbtnl_Trip_0").check();

    //select DD values

    await page.locator("#ctl00_mainContent_ddl_originStation1_CTXT").click();

    await page.locator("a[value='GAU']").click();
    
    await page.locator("a[value='GOI']").nth(1).click();

   // await page.getByText("5").click();

    await page.locator("#ctl00_mainContent_chk_friendsandfamily").first().check();
    await expect(page.locator("#ctl00_mainContent_chk_friendsandfamily").first()).toBeChecked();

    await page.pause();
    });


    test('Child window handling', async({browser})=>
    {
       
         const context = await browser.newContext();//It means it open a new browse
         const page= await context.newPage();//Open a anew page in the browser

         await page.goto("https://rahulshettyacademy.com/dropdownsPractise/");

        const childPage = page.locator(".blinkingText")

        const [newpage]= await Promise.all([

            page.waitForEvent('page'),
            childPage.click()   
        ])


      
    });

const { test, expect } = require("@playwright/test")


test("Security Test Request", async ({ page }) => {

    //login and reach orders

    await page.goto("https://rahulshettyacademy.com/client");

    const products = page.locator(".card-body");

    const productName = "ZARA COAT 3";
    const username = page.locator("#userEmail");
    const password = page.locator("#userPassword");
    const login = page.locator("#login")
    await username.fill("mehu1414@gmail.com");
    await password.fill("Mehu@123");
    await login.click();
    await page.waitForLoadState('networkidle'); //IMP step IV  //IMP step IV
    await page.locator(".card-body b").first().waitFor(); //used to wait until alll the products are visible on the page

    await page.locator("button[routerlink*='myorders']").click();

    page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=*",  //if you find this url them intercept the 
    // request and send the fake response to the browser    
        async route => route.continue({ url: "https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=6a111c2ba317ee3e78baacb763d9b1e" }))//continue to use the url send by the browser and not the url 
        // which we have mentioned in the route method because the url which we have mentioned in the route method is used to intercept the request and send the fake response to the browser and not to make the API call to the original API url because if we make the API call to the original API url then we will get the original response and not the fake response which we want to send to the browser    
    await page.locator("button:has-text('View')").first().click();
    await expect(page.locator(""));
    await page.pause();


});



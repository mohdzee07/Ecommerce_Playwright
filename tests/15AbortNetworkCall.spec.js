const { test, expect } = require("@playwright/test")



test('Browser context PW test', async ({ browser }) => {

    //this 2 steps arent required if we pass "page" fixxure 
    const context = await browser.newContext();
    const page = await context.newPage();
    const username = page.locator("#username");
    const signin = page.locator("#signInBtn");
    const cardtitle = page.locator(".card-body a");


    // page.route('**/*.css', route => route.abort()); // this is used to abort the request of the 
    // css file because we dont want to load the css file on the page and we want to test the
    //  functionality of the page without loading the css file because 

   // page.route("**/*.{png,jpeg,jpg}", route => route.abort()); //this blocks loading the images on the page and
    //  we can test the functionality of the page without loading the images on the page

    page.on('request', request => console.log(request.url())); // this is used to log the url of the request made by the browser in the console and we can use this url to intercept the request and send the fake response to the browser

    //to fetch the all the response of the API call made by the browser and log it in the console

    page.on('response', response => console.log(response.url(), response.status())); // this is used to log the url of the response received by the browser in the console and we can use this url to intercept the response and send the fake response to the browser


    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

    await username.fill("rahulshetty");
    await page.locator("[name='password']").fill("Learning@830$3mK2");
    await page.locator("[type='checkbox']").check();

    await signin.click();
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